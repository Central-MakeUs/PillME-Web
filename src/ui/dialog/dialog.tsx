import * as RadixDialog from '@radix-ui/react-dialog';
import * as styles from './dialog.css.ts';

export type DialogAction = 'single' | 'danger' | 'default';

export interface DialogProps {
  title: string;
  description: string;
  action: DialogAction;
  leftButtonText?: string;
  rightButtonText?: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm?: () => void;
}

export const Dialog = ({
  title,
  description,
  action,
  leftButtonText = '취소',
  rightButtonText = '확인',
  open,
  onOpenChange,
  onConfirm,
}: DialogProps) => {
  return (
    <RadixDialog.Root open={open} onOpenChange={onOpenChange}>
      <RadixDialog.Portal>
        <RadixDialog.Content className={styles.dialog}>
          <div className={styles.textContainer}>
            <RadixDialog.Title className={styles.title}>
              {title}
            </RadixDialog.Title>
            <RadixDialog.Description className={styles.description}>
              {description}
            </RadixDialog.Description>
          </div>

          <div className={styles.buttonContainer({ type: action })}>
            {action !== 'single' && (
              <RadixDialog.Close asChild>
                <button
                  className={styles.button({
                    type: action === 'danger' ? 'dangerLeft' : 'defaultLeft',
                  })}
                >
                  {leftButtonText}
                </button>
              </RadixDialog.Close>
            )}
            <RadixDialog.Close asChild>
              <button
                className={styles.button({
                  type:
                    action === 'single'
                      ? 'single'
                      : action === 'danger'
                        ? 'dangerRight'
                        : 'defaultRight',
                })}
                onClick={onConfirm}
              >
                {rightButtonText}
              </button>
            </RadixDialog.Close>
          </div>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};
