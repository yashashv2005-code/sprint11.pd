import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { Input } from '@/src/components/Input';

function ControlledInput() {
  const [value, setValue] = useState('');

  return (
    <Input
      label="Name"
      placeholder="Type your name"
      value={value}
      onChange={setValue}
      required
    />
  );
}

describe('Input', () => {
  it('renders label, placeholder, and updates value', async () => {
    const user = userEvent.setup();
    render(<ControlledInput />);

    const input = screen.getByLabelText(/name \*/i);
    expect(input).toHaveAttribute('placeholder', 'Type your name');
    await user.type(input, 'Ada');
    expect(input).toHaveValue('Ada');
  });

  it('shows error text when supplied', () => {
    render(<Input label="Email" value="" onChange={jest.fn()} error="Email is required" />);
    expect(screen.getByText('Email is required')).toBeInTheDocument();
  });
});
