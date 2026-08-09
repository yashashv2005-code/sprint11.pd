import { UserData } from '@/src/components/UserData';

export default function ApiTestingPage() {
  return (
    <main style={{ minHeight: '100vh', padding: '2rem', background: '#f8fafc' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gap: '1rem' }}>
        <h1 style={{ fontSize: '2rem', color: '#0f172a' }}>API Testing Demo</h1>
        <p style={{ color: '#475569' }}>This page demonstrates loading states, successful responses, and mocked failures for test coverage.</p>
        <div style={{ background: 'white', borderRadius: '1rem', padding: '1.5rem', border: '1px solid #e2e8f0' }}>
          <UserData />
        </div>
      </div>
    </main>
  );
}
