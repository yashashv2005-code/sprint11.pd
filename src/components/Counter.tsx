'use client';

import { useState } from 'react';
import styles from './testlab.module.css';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Counter</h3>
      <div className={styles.counterWrap}>
        <button aria-label="decrement counter" className={styles.counterButton} onClick={() => setCount((value) => value - 1)}>
          −
        </button>
        <span className={styles.counterValue} aria-live="polite">
          {count}
        </span>
        <button aria-label="increment counter" className={styles.counterButton} onClick={() => setCount((value) => value + 1)}>
          +
        </button>
      </div>
      <div style={{ marginTop: '0.75rem' }}>
        <button className={styles.resetButton} onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}
