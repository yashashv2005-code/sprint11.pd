import { render, screen, waitFor } from '@testing-library/react';
import { UserData } from '@/src/components/UserData';

describe('UserData', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('shows a loading state initially', () => {
    global.fetch = jest.fn(() => new Promise(() => undefined)) as jest.Mock;

    render(<UserData />);

    expect(screen.getByText('Loading users...')).toBeInTheDocument();
  });

  it('renders users from a successful response', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => [{ id: 1, name: 'John Doe', email: 'john@example.com' }],
    }) as jest.Mock;

    render(<UserData />);

    await waitFor(() => expect(screen.getByText('John Doe')).toBeInTheDocument());
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
  });

  it('shows an error state when fetching fails', async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error('Network')) as jest.Mock;

    render(<UserData />);

    await waitFor(() => expect(screen.getByText('Unable to load users.')).toBeInTheDocument());
  });
});
