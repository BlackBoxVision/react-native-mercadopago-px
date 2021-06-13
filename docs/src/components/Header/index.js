import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './styles.module.css';

const Header = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            style={{ backgroundColor: '#EBFDF3' }}
            className="button button--secondary button--lg"
            to="mailto:hello@blackbox-vision.tech?subject=React Native MercadoPago PX"
          >
            Contactanos
          </Link>
        </div>
      </div>
    </header>
  );
};

Header.displayName = 'Header';

export default Header;
