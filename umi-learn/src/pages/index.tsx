import React from 'react';
import styles from './index.css';
import { Button } from 'antd';
import { Link } from 'umi';
export default function () {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <Button type="primary">Primar11y</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="link">Link</Button>
      <Link to="/home">home888</Link>
      <ul className={styles.list}>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            Getting Started
          </a>
        </li>
      </ul>
    </div>
  );
}
