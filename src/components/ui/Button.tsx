import Link from 'next/link';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import styles from './Button.module.scss';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'md' | 'lg';

interface CommonProps {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  iconPosition?: 'start' | 'end';
  className?: string;
  children: ReactNode;
}

type AnchorProps = CommonProps &
  Omit<ComponentPropsWithoutRef<'a'>, keyof CommonProps> & { href: string };
type NativeButtonProps = CommonProps &
  Omit<ComponentPropsWithoutRef<'button'>, keyof CommonProps> & {
    href?: undefined;
  };

export type ButtonProps = AnchorProps | NativeButtonProps;

const isInternal = (href: string) =>
  href.startsWith('/') && !href.endsWith('.pdf');

export default function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    icon,
    iconPosition = 'end',
    className,
    children,
    ...rest
  } = props;

  const classes = [styles.button, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {icon && iconPosition === 'start' && (
        <span className={styles.icon}>{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'end' && (
        <span className={styles.icon}>{icon}</span>
      )}
    </>
  );

  if (typeof rest.href === 'string') {
    const { href, ...anchorProps } = rest as AnchorProps;
    if (isInternal(href)) {
      return (
        <Link href={href} className={classes} {...anchorProps}>
          {content}
        </Link>
      );
    }
    return (
      <a href={href} className={classes} {...anchorProps}>
        {content}
      </a>
    );
  }

  const buttonProps = rest as NativeButtonProps;
  return (
    <button type="button" className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
