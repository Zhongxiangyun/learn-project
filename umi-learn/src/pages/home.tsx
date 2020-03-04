import React from 'react';
import styles from './index.css';
import { Button } from 'antd';
import { Link } from 'umi';

export default function () {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
      <Button type="primary">home</Button>
      <Button>home</Button>
      <Button type="dashed">home</Button>
      <Button type="link">home</Button>
      <Link to="/">返回</Link>
    </div>
  );
}
