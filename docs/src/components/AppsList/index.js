import React from "react";
import clsx from "clsx";

import styles from "./styles.module.css";
import { data } from "./constants";

const AppItem = ({ logo, title, description }) => {
  return (
    <div className={clsx("col col--4")}>
      <div className={styles.appLogoContainer}>
        <img alt={title} src={logo} className={styles.appLogo} />
        {/* <Svg className={styles.featureSvg} alt={title} /> */}
      </div>
      <div>
        {title && <h3>{title}</h3>}
        {description && <p>{description}</p>}
      </div>
    </div>
  );
};

const AppsList = () => {
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
            Estas aplicaciones ya lo están utilizando
          </h4>
        </div>
        <div className="row">
          {data.map((props, idx) => (
            <AppItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
};

AppsList.displayName = "AppsList";

export default AppsList;
