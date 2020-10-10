import React from "react";
import styles from "./Receipt.module.scss";

const Receipt = ({
  itemsSavings,
  receiptData,
  totalBeforeSavings,
  totalSavings,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.receiptList}>
        <ul>{receiptData}</ul>
        <p>Total before savings.....{totalBeforeSavings}</p>
      </div>
      <div className={styles.receiptList}>
        <ul>{itemsSavings}</ul>
        <p>Total savings.....{totalSavings}</p>
      </div>
    </div>
  );
};

export default Receipt;
