import { ComponentProps } from 'react';
import { Drawer } from 'vaul';
import { cx } from '@/ui/util';
import * as styles from './bottom-sheet.css';

const Root = Drawer.Root;

const Trigger = Drawer.Trigger;

const Close = Drawer.Close;

const Portal = Drawer.Portal;

const Overlay = ({
  className,
  style: _style,
  ...props
}: ComponentProps<typeof Drawer.Overlay>) => (
  <Drawer.Overlay className={cx(styles.overlay, className)} {...props} />
);

const Title = Drawer.Title;
const Description = Drawer.Description;

const Handle = ({
  className,
  ...props
}: ComponentProps<typeof Drawer.Handle>) => (
  <Drawer.Handle className={cx(styles.handle, className)} {...props} />
);

const Content = ({
  className,
  ...props
}: ComponentProps<typeof Drawer.Content>) => {
  return (
    <div className={styles.contentContainer}>
      <Drawer.Content className={cx(styles.content, className)} {...props} />
    </div>
  );
};

export const BottomSheet = {
  Root,
  Trigger,
  Close,
  Portal,
  Overlay,
  Title,
  Description,
  Handle,
  Content,
};
