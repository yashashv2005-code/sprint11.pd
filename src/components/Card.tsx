import styles from './testlab.module.css';

interface CardProps {
  title: string;
  description: string;
  icon?: string;
  action?: React.ReactNode;
}

export function Card({ title, description, icon, action }: CardProps) {
  return (
    <article className={styles.card}>
      {icon ? <div className={styles.icon}>{icon}</div> : null}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {action ? <div className={styles.action}>{action}</div> : null}
    </article>
  );
}
