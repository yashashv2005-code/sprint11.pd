import styles from './testlab.module.css';

interface InputProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  id?: string;
  name?: string;
  type?: string;
}

export function Input({ label, placeholder, value, onChange, error, required = false, id, name, type = 'text' }: InputProps) {
  const inputId = id ?? name ?? label.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={inputId}>
        {label}
        {required ? ' *' : ''}
      </label>
      <input
        id={inputId}
        className={styles.input}
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        aria-invalid={Boolean(error)}
        onChange={(event) => onChange(event.target.value)}
      />
      {error ? <p className={styles.error}>{error}</p> : null}
    </div>
  );
}
