import Link from 'next/link';
import { Button } from '@/src/components/Button';
import { UserData } from '@/src/components/UserData';

export default function ApiTestingPage() {
  return (
    <main style={{ minHeight: '100vh', padding: '2rem', background: '#f8fbff' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gap: '2rem' }}>
        <div>
          <Link href="/">
            <Button variant="secondary">Back to Dashboard</Button>
          </Link>
        </div>

        <div>
          <h1 style={{ fontSize: '2rem', color: '#0f172a', marginBottom: '0.5rem' }}>API Testing Demo</h1>
          <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.7' }}>
            This page demonstrates how to test components that fetch data from APIs. In the real application, it loads users from <code style={{ background: '#e2e8f0', padding: '0.2rem 0.4rem', borderRadius: '0.3rem', fontFamily: 'monospace' }}>/api/users</code>.
          </p>
        </div>

        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 14px 36px rgba(15, 23, 42, 0.05)' }}>
          <h2 style={{ color: '#0f172a', marginBottom: '1.5rem' }}>Loading Users from API</h2>
          <p style={{ color: '#475569', marginBottom: '1.5rem', lineHeight: '1.7' }}>
            Below, the <strong>UserData</strong> component loads a list of users. Watch it go through these states:
          </p>
          <ul style={{ display: 'grid', gap: '0.75rem', marginBottom: '2rem', paddingLeft: '1.5rem', color: '#475569' }}>
            <li><strong>Loading:</strong> "Loading users..." appears while fetching</li>
            <li><strong>Success:</strong> User cards display with name and email</li>
            <li><strong>Error:</strong> "Unable to load users." if the request fails</li>
          </ul>
          <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1.5rem', padding: '1rem', background: '#eff6ff', borderRadius: '0.75rem', borderLeft: '4px solid #2563eb' }}>
            <strong>Testing Note:</strong> Jest tests mock the fetch() call, so tests run without internet. They verify each state (loading, success, error) by mocking the API response.
          </p>

          <div style={{ background: '#f8fafc', borderRadius: '0.85rem', padding: '1.5rem' }}>
            <UserData />
          </div>
        </div>

        <div style={{ background: '#fef2f2', padding: '1.5rem', borderRadius: '1rem', borderLeft: '4px solid #dc2626' }}>
          <h3 style={{ color: '#991b1b', marginBottom: '0.5rem' }}>Test Isolation (No Real Network Calls)</h3>
          <p style={{ color: '#7f1d1d', lineHeight: '1.7' }}>
            In the Jest test suite, the API response is mocked using <code style={{ background: '#fee2e2', padding: '0.2rem 0.4rem', borderRadius: '0.3rem', fontFamily: 'monospace' }}>jest.fn().mockResolvedValue()</code>. This ensures:
          </p>
          <ul style={{ paddingLeft: '1.5rem', color: '#7f1d1d', marginTop: '0.75rem', lineHeight: '1.7' }}>
            <li>Tests run offline (no internet required)</li>
            <li>Tests are fast (no network latency)</li>
            <li>Tests are reliable (no flakiness from external services)</li>
            <li>All 3 states (loading, success, error) can be tested</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
