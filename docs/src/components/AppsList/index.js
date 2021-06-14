import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Translate from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import Loader from "./components/Loader";
import styles from "./styles.module.css";

const AppItem = ({ logo, title, description, googlePlayUrl, appStoreUrl }) => {
  return (
    <div className={clsx("col col--4")}>
      <div
        style={{
          margin: 16,
          padding: 16,
          borderRadius: 16,
          border: "1px solid #002b40",
        }}
      >
        <div className={styles.appLogoContainer}>
          <img alt={title} src={logo} className={styles.appLogo} />
        </div>
        <div>
          {title && <h3 className={styles.title}>{title}</h3>}
          {description && <p>{description}</p>}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <a
              href={googlePlayUrl}
              target="_blank"
              rel="noopener noreferer"
              style={{ padding: 8 }}
            >
              Android
            </a>
            <a
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferer"
              style={{ padding: 8 }}
            >
              iOS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const AppsList = () => {
  const [apps, setApps] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    fetch(`${siteConfig.baseUrl}appsList.json`, {
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
          {isLoading ? (
            <Loader />
          ) : (
            Array.isArray(apps) &&
            apps.length > 0 &&
            apps.map((props, idx) => <AppItem key={idx} {...props} />)
          )}
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
