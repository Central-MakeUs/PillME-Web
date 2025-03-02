import { useState } from 'react';
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query';
import { addMyMedicineAPI } from '@/apis/mutation/myMedicine';
import { myMedicineQueryKeys } from '@/apis/query/myMedicine';
import { productQueryOption } from '@/apis/query/product';
import { Product } from '@/apis/types/product';
import { Check, Plus } from '@/assets';
import { Button } from '@/ui/button';
import { Spacer } from '@/ui/spacer/spacer';
import { useShowCustomToast } from '@/ui/toast/toast';
import * as styles from './PillBoxCardList.css';

export const PillBoxCardList = ({ keyword }: { keyword: string }) => {
  const showCustomToast = useShowCustomToast();

  const queryClient = useQueryClient();

  const {
    data: { data: fetchedProductList },
  } = useSuspenseQuery(productQueryOption.list({ search: keyword }));

  const initialProductList = fetchedProductList.map((product) => ({
    ...product,
    checked: false,
  }));

  const [productList, setProductList] = useState(initialProductList);

  const { mutate } = useMutation({
    mutationFn: addMyMedicineAPI,
    onSuccess: ({
      data: {
        product: { id },
      },
    }) => {
      showCustomToast('내 약통에 추가 되었어요', 'success', '/pillbox/manage');
      setProductList((prev) =>
        prev.map((product) => ({
          ...product,
          checked: id === product.id,
        })),
      );
      queryClient.resetQueries({
        queryKey: [...myMedicineQueryKeys.lists()],
      });
    },
  });

  const onClickSaveButton = (productId: number) => () => {
    mutate({ productId });
  };

  return (
    <div className={styles.pillboxCardListContainer}>
      {productList.map((product) => (
        <PillBoxCard
          key={product.id}
          {...product}
          onClickSaveButton={onClickSaveButton(product.id)}
        />
      ))}
    </div>
  );
};

type PillBoxCardProps = {
  onClickSaveButton: VoidFunction;
  checked?: boolean;
} & Product;

export const PillBoxCard = ({
  name,
  imageUrl,
  description,
  onClickSaveButton,
  checked = false,
}: PillBoxCardProps) => {
  return (
    <div className={styles.cardContainer}>
      <img className={styles.image} src={imageUrl} />
      <div className={styles.cardRight}>
        <div>
          <p className={styles.description}>{description}</p>
          <Spacer size={6} />
          <p className={styles.title}>{name}</p>
        </div>
        <Button
          variant="third"
          size="small"
          onClick={onClickSaveButton}
          left={checked ? <Check /> : <Plus />}
        >
          내 약통
        </Button>
      </div>
    </div>
  );
};
