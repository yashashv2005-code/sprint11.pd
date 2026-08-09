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
    description: 'Validate isolated UI behavior for reusable components.',
    icon: '🧪',
  },
  {
    title: 'Component Testing',
    description: 'Verify interactive widgets and accessible user flows.',
    icon: '🧩',
  },
  {
    title: 'State Testing',
    description: 'Exercise form and counter logic through real interaction.',
    icon: '⚙️',
  },
  {
    title: 'Network Mocking',
    description: 'Simulate API responses without relying on internet access.',
    icon: '🌐',
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
            A practical demonstration of automated testing using Next.js, Jest, and React Testing Library.
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
          <h2>Testing Coverage Snapshot</h2>
          <div className={styles.statsGrid}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.statCard}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
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
          <h2>Counter and contact form validation in action.</h2>
        </div>
        <div className={styles.demoGrid}>
          <div className={styles.demoPanel}>
            <Counter />
          </div>
          <div className={styles.demoPanel}>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className={styles.section} id="about">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>About TestLab</p>
          <h2>Built as a modern academic showcase of QA automation practices.</h2>
        </div>
        <p className={styles.aboutText}>
          TestLab demonstrates how unit, component, state, form, and network-mocked tests can work together to create trustworthy UI experiences.
        </p>
      </section>
    </main>
  );
}
