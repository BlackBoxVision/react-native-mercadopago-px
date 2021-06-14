import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Translate from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import styles from "./styles.module.css";

const AppItem = ({ logo, title, description }) => {
  return (
    <div className={clsx("col col--4")}>
      <div className={styles.appLogoContainer}>
        <img alt={title} src={logo} className={styles.appLogo} />
      </div>
      <div className={styles.infoContainer}>
        {title && <h3 className={styles.title}>{title}</h3>}
        {description && <p>{description}</p>}
      </div>
    </div>
  );
};

const AppsList = () => {
  const [apps, setApps] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    fetch(`${siteConfig.baseUrl}static/appsList.json`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then(setApps)
      .catch((err) => console.error("err: ", err))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
      <section className={styles.section}>
        <div
          className="row"
          style={{
            marginTop: 32,
            marginBottom: 32,
          }}
        >
          Loading...
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <div
          className="row"
          style={{
            marginTop: 32,
            marginBottom: 32,
          }}
        >
          <h4 className={styles.appListTitle}>
            <Translate id="home.appListTitle">
              These apps are already using it
            </Translate>
          </h4>
        </div>
        <div className="row">
          {Array.isArray(apps) &&
            apps.length > 0 &&
            apps.map((props, idx) => <AppItem key={idx} {...props} />)}
        </div>
        <p className={styles.appListText}>
          <Translate id="home.appListText">
            If you are using it and you want your app to appear, give us a PR by
            adding your application
          </Translate>
        </p>
      </div>
    </section>
  );
};

AppsList.displayName = "AppsList";

export default AppsList;
