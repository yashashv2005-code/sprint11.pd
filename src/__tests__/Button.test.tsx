import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '@/src/components/Button';

describe('Button', () => {
  it('renders text and handles clicks', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Increment</Button>);

    const button = screen.getByRole('button', { name: /increment/i });
    expect(button).toBeInTheDocument();
    await user.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('supports disabled state', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole('button', { name: /disabled/i });
    expect(button).toBeDisabled();
  });
});
