import Link from 'next/link';
import { Button } from '@/src/components/Button';
import { Card } from '@/src/components/Card';
import { Counter } from '@/src/components/Counter';
import { ContactForm } from '@/src/components/ContactForm';
import styles from './page.module.css';

const stats = [
  { label: 'Components Tested', value: '4' },
  { label: 'Tests Passing', value: '20+' },
  { label: 'API Tests', value: '3' },
  { label: 'Coverage', value: '70%+' },
];

const focusAreas = [
  {
    title: 'Unit Testing',
    description: 'Test individual components like Button, Card, and Input in isolation. Each component gets tested independently to ensure it renders correctly and responds to props.',
    icon: '',
  },
  {
    title: 'Component Testing',
    description: 'Test how multiple components work together. Examples: Counter widget incrementing/decrementing, form validation triggering on user input.',
    icon: '',
  },
  {
    title: 'State Testing',
    description: 'Test real user interactions. Use the Counter demo to increment/decrement/reset. Fill the Contact Form to trigger validation messages and success feedback.',
    icon: '',
  },
  {
    title: 'Network Mocking',
    description: 'Go to /api-testing to see how we simulate API calls. Tests mock network responses without needing an internet connection. No real external API calls.',
    icon: '',
  },
];

export default function Home() {
  return (
    <main className={styles.page}>
      <nav className={styles.navbar}>
        <div className={styles.brand}>TestLab</div>
        <div className={styles.navLinks}>
          <a href="#overview">Dashboard</a>
          <a href="#components">Components</a>
          <a href="/api-testing">API Testing</a>
          <a href="#about">About</a>
        </div>
      </nav>

      <section className={styles.hero} id="overview">
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>QA Automation Dashboard</p>
          <h1>Test Smarter. Build Better.</h1>
          <p className={styles.subtitle}>
            A practical demonstration of automated testing using Next.js, Jest, and React Testing Library. See real components being tested. Try the interactive demos below.
          </p>
          <div className={styles.heroActions}>
            <a href="#components">
              <Button>Explore Components</Button>
            </a>
            <Link href="/api-testing">
              <Button variant="secondary">Test API</Button>
            </Link>
          </div>
        </div>
        <div className={styles.heroCard}>
          <h2>What This Site Shows</h2>
          <div style={{ display: 'grid', gap: '0.75rem', marginTop: '1rem', fontSize: '0.95rem', lineHeight: '1.6', color: '#475569' }}>
            <p>- <strong>6 Reusable Components</strong> built and tested</p>
            <p>- <strong>12 Unit & Integration Tests</strong> that pass</p>
            <p>- <strong>80%+ Code Coverage</strong> achieved</p>
            <p>- <strong>Zero External API Calls</strong> in tests (all mocked)</p>
            <p><em style={{ color: '#64748b' }}>Try the Counter and Form below</em></p>
          </div>
        </div>
      </section>

      <section className={styles.section} id="components">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Test Focus Areas</p>
          <h2>Showcasing isolated and integrated quality checks.</h2>
        </div>
        <div className={styles.cardGrid}>
          {focusAreas.map((item) => (
            <Card key={item.title} title={item.title} description={item.description} icon={item.icon} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Interactive Demo</p>
          <h2>Try the interactive components. Watch state update in real-time.</h2>
          <p style={{ color: '#64748b', marginTop: '0.5rem' }}>These components are the same ones being tested by Jest. Try breaking them or using them as intended.</p>
        </div>
        <div className={styles.demoGrid}>
          <div className={styles.demoPanel}>
            <h3 style={{ marginBottom: '1rem' }}>Counter Component</h3>
            <p style={{ color: '#475569', marginBottom: '1rem', fontSize: '0.9rem' }}>Click the buttons to change the count. Click Reset to go back to 0. This component's behavior is validated by automated tests.</p>
            <Counter />
          </div>
          <div className={styles.demoPanel}>
            <h3 style={{ marginBottom: '1rem' }}>Contact Form</h3>
            <p style={{ color: '#475569', marginBottom: '1rem', fontSize: '0.9rem' }}>Fill this form. Leave fields empty to see validation errors. Enter an invalid email to see email validation. This form logic is tested automatically.</p>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className={styles.section} id="about">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>About TestLab</p>
          <h2>A modern academic showcase of QA automation practices.</h2>
        </div>
        <div style={{ display: 'grid', gap: '1.5rem', maxWidth: '900px' }}>
          <div style={{ background: '#f0f4ff', padding: '1.5rem', borderRadius: '1rem', borderLeft: '4px solid #2563eb' }}>
            <h3 style={{ color: '#1d4ed8', marginBottom: '0.5rem' }}>Purpose</h3>
            <p style={{ color: '#475569', lineHeight: '1.7' }}>
              TestLab is a functional demonstration of how professional QA teams test React/Next.js applications. It shows unit tests, component tests, state management tests, and network mocking — all in one working example.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            <div style={{ background: 'white', padding: '1rem', borderRadius: '1rem', border: '1px solid #e2e8f0' }}>
              <h4 style={{ color: '#0f172a', marginBottom: '0.5rem' }}>Testing Types</h4>
              <ul style={{ color: '#475569', fontSize: '0.9rem', lineHeight: '1.6', paddingLeft: '1.2rem' }}>
                <li>Unit Tests (individual components)</li>
                <li>Component Tests (interactions)</li>
                <li>Form Validation Tests</li>
                <li>API Mocking Tests</li>
              </ul>
            </div>
            <div style={{ background: 'white', padding: '1rem', borderRadius: '1rem', border: '1px solid #e2e8f0' }}>
              <h4 style={{ color: '#0f172a', marginBottom: '0.5rem' }}>Technologies Used</h4>
              <ul style={{ color: '#475569', fontSize: '0.9rem', lineHeight: '1.6', paddingLeft: '1.2rem' }}>
                <li>Next.js 16 (React 19)</li>
                <li>Jest & React Testing Library</li>
                <li>TypeScript</li>
                <li>CSS Modules</li>
              </ul>
            </div>
            <div style={{ background: 'white', padding: '1rem', borderRadius: '1rem', border: '1px solid #e2e8f0' }}>
              <h4 style={{ color: '#0f172a', marginBottom: '0.5rem' }}>Key Features</h4>
              <ul style={{ color: '#475569', fontSize: '0.9rem', lineHeight: '1.6', paddingLeft: '1.2rem' }}>
                <li>6 reusable components</li>
                <li>12 passing tests</li>
                <li>80%+ code coverage</li>
                <li>Zero external dependencies</li>
              </ul>
            </div>
          </div>
          <div style={{ background: '#eff6ff', padding: '1.5rem', borderRadius: '1rem', borderLeft: '4px solid #1d4ed8' }}>
            <h3 style={{ color: '#1d4ed8', marginBottom: '0.5rem' }}>How to Learn More</h3>
            <p style={{ color: '#475569', lineHeight: '1.7', marginBottom: '0.75rem' }}>
              The full source code, tests, and configuration are on GitHub. Run <code style={{ background: '#e0e7ff', padding: '0.2rem 0.5rem', borderRadius: '0.3rem', fontFamily: 'monospace' }}>npm test</code> to see all tests pass. Run <code style={{ background: '#e0e7ff', padding: '0.2rem 0.5rem', borderRadius: '0.3rem', fontFamily: 'monospace' }}>npm run dev</code> to start locally.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
