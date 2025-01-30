import { ComponentProps, PropsWithChildren, ReactNode } from 'react';
import { ArrowRightr, Plus } from '../../assets';
import { cx } from '../util';
import * as styles from './button.styles.css';

export type ButtonProps = ComponentProps<'button'> &
  styles.ButtonVariants & {
    left?: ReactNode;
    right?: ReactNode;
  };

export const Button = ({
  className,
  variant,
  size,
  disabled,
  left,
  right,
  children,
  ...restProps
}: PropsWithChildren<ButtonProps>) => {
  const defaultLeftIcon =
    variant === 'third' && (size === 'small' || size === 'large') ? (
      <Plus width={20} height={20} />
    ) : null;
  const defaultRightIcon =
    variant === 'primary' && size === 'small' ? (
      <ArrowRightr width={24} height={24} />
    ) : null;

  const leftIcon = left ?? defaultLeftIcon;
  const rightIcon = right ?? defaultRightIcon;

  return (
    <button
      {...restProps}
      className={cx(
        styles.buttonVariants({
          variant,
          size,
          disabled: disabled ? true : false,
        }),
        className,
      )}
      disabled={disabled}
    >
      {leftIcon && <span>{leftIcon}</span>}
      {children}
      {rightIcon && <span>{rightIcon}</span>}
    </button>
  );
};
