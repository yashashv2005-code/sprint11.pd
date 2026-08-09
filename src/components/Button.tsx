import styles from './testlab.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className, ...props }: ButtonProps) {
  return (
    <button
      type={props.type ?? 'button'}
      className={`${styles.button} ${variant === 'secondary' ? styles.secondary : styles.primary} ${props.disabled ? styles.disabled : ''} ${className ?? ''}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
