import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  target?: string;
  rel?: string;
};

export function Button({ children, variant = 'primary', href, className = '', target, rel, type = 'button', ...props }: ButtonProps) {
  const classes = `ui-button ui-button-${variant} ${className}`.trim();

  if (href) {
    return <a className={classes} href={href} target={target} rel={rel}>{children}</a>;
  }

  return <button className={classes} type={type} {...props}>{children}</button>;
}
