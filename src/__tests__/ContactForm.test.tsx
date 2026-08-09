import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ContactForm } from '@/src/components/ContactForm';

describe('ContactForm', () => {
  it('shows validation messages for empty submission', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.click(screen.getByRole('button', { name: /submit/i }));

    expect(screen.getByText('Name is required.')).toBeInTheDocument();
    expect(screen.getByText('Email is required.')).toBeInTheDocument();
    expect(screen.getByText('Message is required.')).toBeInTheDocument();
  });

  it('shows a success message for a valid submission', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByLabelText(/name \*/i), 'Ada Lovelace');
    await user.type(screen.getByLabelText(/email \*/i), 'ada@example.com');
    await user.type(screen.getByLabelText(/message \*/i), 'Great testing demo');
    await user.click(screen.getByRole('button', { name: /submit/i }));

    expect(screen.getByText('Message submitted successfully!')).toBeInTheDocument();
  });

  it('shows an invalid email message', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByLabelText(/name \*/i), 'Ada');
    await user.type(screen.getByLabelText(/email \*/i), 'invalid');
    await user.type(screen.getByLabelText(/message \*/i), 'Testing');
    await user.click(screen.getByRole('button', { name: /submit/i }));

    expect(screen.getByText('Enter a valid email.')).toBeInTheDocument();
  });
});
