import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import Header from '../components/Header';
import AppsList from '../components/AppsList';

const Home = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <Header />
      <main>
        <AppsList />
      </main>
    </Layout>
  );
};

Home.displayName = 'Home';

export default Home;
