import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Translate from "@docusaurus/Translate";

import Header from "../components/Header";
import AppsList from "../components/AppsList";

import styles from "./styles.module.css";

const Home = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <Header />
      <div className={styles.banner}>
        <p className={clsx("hero__subtitle", styles.bannerText)}>
          <Translate id="home.tagline" description="The homepage tagline">
            {siteConfig.tagline}
          </Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            style={{ backgroundColor: "#EBFDF3" }}
            className="button button--secondary button--lg"
            to="mailto:hello@blackbox-vision.tech?subject=React Native MercadoPago PX"
          >
            <Translate id="home.cta" description="The homepage call to action">
              Contact Us
            </Translate>
          </Link>
        </div>
      </div>
      <main>
        <AppsList />
      </main>
    </Layout>
  );
};

Home.displayName = "Home";

export default Home;
