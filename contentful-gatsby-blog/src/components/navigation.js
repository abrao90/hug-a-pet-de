import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Blog</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">Forums</Link>
      </li>
    </ul>
  </nav>
)
