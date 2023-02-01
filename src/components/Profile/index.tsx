import React from "react";
import { Avatar } from "../Avatar";
import styles from "./styles.module.css";

interface Props {
  name: string;
  orientation: "vertical" | "horizontal";
  picture: string;
  role: string;
}

export function Profile({
  name,
  orientation,
  picture,
  role,
}: Props): React.ReactElement {
  if (orientation === "vertical") {
    return (
      <div className={styles.vertical}>
        <Avatar alt="" picture={picture} />

        <div className={styles.verticalInfo}>
          <strong>{name}</strong>
          <span>{role}</span>
        </div>
      </div>
    );
  }

  if (orientation === "horizontal") {
    return (
      <div className={styles.horizontal}>
        <Avatar alt="" picture={picture} />

        <div className={styles.horizontalInfo}>
          <strong>{name}</strong>
          <span>{role}</span>
        </div>
      </div>
    );
  }

  return <></>;
}
