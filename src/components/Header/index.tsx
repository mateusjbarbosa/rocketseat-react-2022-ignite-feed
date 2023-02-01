import React from "react";
import igniteLogoPath from "../../assets/ignite-logo.svg";
import styles from "./styles.module.css";

export function Header(): React.ReactElement {
  return (
    <header className={styles.header}>
      <img src={igniteLogoPath} alt="Logo do Ignite" />
    </header>
  );
}
