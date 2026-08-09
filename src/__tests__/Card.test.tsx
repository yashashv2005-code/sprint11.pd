import { render, screen } from '@testing-library/react';
import { Card } from '@/src/components/Card';

describe('Card', () => {
  it('renders title and description', () => {
    render(<Card title="Unit Testing" description="Test components in isolation." icon="🧪" />);

    expect(screen.getByText('Unit Testing')).toBeInTheDocument();
    expect(screen.getByText('Test components in isolation.')).toBeInTheDocument();
  });
});
