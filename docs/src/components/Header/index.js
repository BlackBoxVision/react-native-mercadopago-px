import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import ScreenshotCardImg from "../../../static/img/screenshot-card.png";
import ScreenshotDniImg from "../../../static/img/screenshot-dni.png";

import styles from "./styles.module.css";

const Header = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={styles.contentContainer}>
        <img alt="Screenshot card" src={ScreenshotCardImg} />
        <h1 className={clsx("hero__title", styles.heroText)}>
          {siteConfig.title}
        </h1>
        <img alt="Screenshot dni" src={ScreenshotDniImg} />
      </div>
    </header>
  );
};

Header.displayName = "Header";

export default Header;
