import { ComponentProps } from 'react';
import { DeleteCir, Search } from '../../assets/index.ts';
import { cx } from '../util.ts';
import * as styles from './search-field.styles.css.ts';

export type SearchFieldProps = ComponentProps<'input'> &
  styles.SearchFieldVariants &
  Partial<{
    hasResetButton: boolean;
    onClickResetButton: VoidFunction;
  }>;

export const SearchField = (props: SearchFieldProps) => {
  const { className, variant, hasResetButton, ...restProps } = props;

  return (
    <div className={styles.searchFieldContainer}>
      <Search className={styles.SearchFieldLeftElement} />
      <input
        {...restProps}
        className={cx(
          styles.searchFieldVariants({
            variant,
          }),
          className,
        )}
      />
      {hasResetButton && (
        <button className={styles.SearchFieldRightElement}>
          <DeleteCir />
        </button>
      )}
    </div>
  );
};
