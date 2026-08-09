'use client';

import { useEffect, useState } from 'react';
import styles from './testlab.module.css';

interface User {
  id: number;
  name: string;
  email: string;
}

export function UserData() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const response = await fetch('/api/users');
        if (!response.ok) throw new Error('Failed');
        const data = (await response.json()) as User[];
        setUsers(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    void loadUsers();
  }, []);

  if (loading) {
    return <p className={styles.status}>Loading users...</p>;
  }

  if (error) {
    return <p className={styles.errorState}>Unable to load users.</p>;
  }

  return (
    <div className={styles.userList}>
      {users.map((user) => (
        <div className={styles.userCard} key={user.id}>
          <p className={styles.userName}>{user.name}</p>
          <p className={styles.userEmail}>{user.email}</p>
        </div>
      ))}
    </div>
  );
}
