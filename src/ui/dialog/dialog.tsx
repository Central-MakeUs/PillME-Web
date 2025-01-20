import * as RadixDialog from '@radix-ui/react-dialog';
import * as styles from './dialog.css.ts';

export type DialogAction = 'single' | 'danger' | 'default';

export interface DialogProps {
  trigger: React.ReactNode;
  title: string;
  description: string;
  action: DialogAction;
  leftButtonText?: string;
  rightButtonText?: string;
  onConfirm?: () => void;
}

export const Dialog = ({
  trigger,
  title,
  description,
  action,
  leftButtonText = '취소',
  rightButtonText = '확인',
  onConfirm,
}: DialogProps) => {
  return (
    <RadixDialog.Root>
      <RadixDialog.Trigger asChild>{trigger}</RadixDialog.Trigger>

      <RadixDialog.Portal>
        <RadixDialog.Overlay className={styles.overlay} />
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
