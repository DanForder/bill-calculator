import React from "react";
import styles from "./DealsContainer.module.scss";

const DealsContainer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h3>Today's Deals</h3>
        <ul className={styles.dealList}>
          <li>Buy one get one free on all Cheese</li>
          <li>Buy a Soup, get a half price Bread</li>
          <li>A third off Butter</li>
        </ul>
      </div>
    </div>
  );
};

export default DealsContainer;
