import { Link } from "@reach/router";
import React from "react";
import styles from "./ActionTile.module.scss";

const ActionTile = ({ link, header, description, onClick }) => {
  return link ? (
    <Link className={styles.container} to={link}>
      <p className={styles.header}>{header}</p>
      {description && <p className={styles.description}>{description}</p>}
    </Link>
  ) : (
    <div onClick={onClick} className={styles.container}>
      <p className={styles.header}>{header}</p>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
};

export default ActionTile;
