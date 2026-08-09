'use client';

import { useState } from 'react';
import { Button } from './Button';
import { Input } from './Input';
import styles from './testlab.module.css';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors: FormErrors = {};
    if (!form.name.trim()) nextErrors.name = 'Name is required.';
    if (!form.email.trim()) nextErrors.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Enter a valid email.';
    if (!form.message.trim()) nextErrors.message = 'Message is required.';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div style={{ display: 'grid', gap: '1rem' }}>
        <Input
          label="Name"
          placeholder="Your name"
          value={form.name}
          onChange={(value) => {
            setForm((current) => ({ ...current, name: value }));
            setSubmitted(false);
          }}
          error={errors.name}
          required
        />
        <Input
          label="Email"
          type="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={(value) => {
            setForm((current) => ({ ...current, email: value }));
            setSubmitted(false);
          }}
          error={errors.email}
          required
        />
        <Input
          label="Message"
          placeholder="What would you like to test?"
          value={form.message}
          onChange={(value) => {
            setForm((current) => ({ ...current, message: value }));
            setSubmitted(false);
          }}
          error={errors.message}
          required
        />
        <Button type="submit">Submit</Button>
        {submitted ? <p className={styles.status}>Message submitted successfully!</p> : null}
      </div>
    </form>
  );
}
