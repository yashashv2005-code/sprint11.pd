import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from '@/src/components/Counter';

describe('Counter', () => {
  it('starts at zero, increments, decrements, and resets', async () => {
    const user = userEvent.setup();
    render(<Counter />);

    expect(screen.getByText('0')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /increment counter/i }));
    expect(screen.getByText('1')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /increment counter/i }));
    expect(screen.getByText('2')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /decrement counter/i }));
    expect(screen.getByText('1')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /decrement counter/i }));
    expect(screen.getByText('0')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /increment counter/i }));
    await user.click(screen.getByRole('button', { name: /increment counter/i }));
    await user.click(screen.getByRole('button', { name: /reset/i }));
    expect(screen.getByText('0')).toBeInTheDocument();
  });
});
