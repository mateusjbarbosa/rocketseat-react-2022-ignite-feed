import React, { ReactNode } from "react";
import styles from "./styles.module.css";

interface Props {
  children: ReactNode;
}

export function Wrapper({ children }: Props): React.ReactElement {
  return <div className={styles.wrapper}>{children}</div>;
}
