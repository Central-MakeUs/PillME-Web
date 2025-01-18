import { ComponentProps, PropsWithChildren } from 'react';
import { ArrowRightr, Plus } from '../../assets/index.ts';
import { cx } from '../util.ts';
import * as styles from './button.styles.css.ts';

export type ButtonProps = ComponentProps<'button'> & styles.ButtonVariants;

export const Button = ({
  className,
  variant,
  size,
  disabled,
  children,
  ...restProps
}: PropsWithChildren<ButtonProps>) => {
  const leftIcon =
    variant === 'third' && (size === 'small' || size === 'large') ? (
      <Plus width={20} height={20} />
    ) : null;
  const rightIcon =
    variant === 'primary' && size === 'small' ? (
      <ArrowRightr width={24} height={24} />
    ) : null;

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
