import React from "react";
import clsx from "clsx";

import styles from "./styles.module.css";
import { data } from "./constants";

const AppItem = ({ logo, title, description }) => {
  return (
    <div className={clsx("col col--4")}>
      <div>
        <img alt={title} src={logo} className={styles.appLogo} />
        {/* <Svg className={styles.featureSvg} alt={title} /> */}
      </div>
      <div className="text--center padding-horiz--md">
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
          }}
        >
          <span
            style={{
              color: "#002B40",
              fontWeight: 500,
              fontSize: 24,
            }}
          >
            Estas aplicaciones ya lo están utilizando...
          </span>
        </div>
        <div className="row">
          {data.map((props, idx) => (
            <AppItem key={idx} {...props} />
          ))}
        </div>
        <div className="row">
          <span style={{ color: "#002B40", fontSize: 14 }}>
            Si lo estás usando y querés que tu app aparezca, hacenos un PR
            agregando tu aplicación
          </span>
        </div>
      </div>
    </section>
  );
};

AppsList.displayName = "AppsList";

export default AppsList;
