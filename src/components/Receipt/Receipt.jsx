import { Paper, Typography } from "@material-ui/core";
import React from "react";
import { deals } from "../../data/data";
import styles from "./Receipt.module.scss";

const Receipt = ({ products }) => {
  const getPrice = (price, quantity) => {
    return price * quantity;
  };

  const getSubTotal = (products) => {
    let subTotal = 0;
    products.forEach((product) => {
      subTotal += getPrice(product.price, product.numberBought);
    });

    return Math.round(subTotal * 100) / 100;
  };

  const getTotalSavings = (products) => {
    let totalSavings = 0;

    deals.forEach((deal) => {
      totalSavings += deal.getSavings(products);
    });

    return Math.round(totalSavings * 100) / 100;
  };

  const getSavingForItem = (products) => {
    return deals.map((deal) => {
      const saving = Math.round(deal.getSavings(products) * 100) / 100;
      return saving > 0 ? (
        <li key={deal.id}>
          {deal.displayName}...£{saving.toFixed(2)}
        </li>
      ) : null;
    });
  };

  const getFinalTotal = (products) => {
    return getSubTotal(products) - getTotalSavings(products);
  };

  const getReceiptData = () => {
    return products.map((product) => {
      if (product.numberBought > 0) {
        return (
          <li key={product.id}>
            <Typography>
              {product.displayName} x {product.numberBought}......
              {`£${getPrice(product.price, product.numberBought).toFixed(2)}`}
            </Typography>
          </li>
        );
      } else {
        return null;
      }
    });
  };
  return (
    <>
      <Typography variant="h2">Receipt</Typography>
      <Paper
        className={styles.receiptContainer}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <ul>
          {getReceiptData()}
          <li>
            <Typography className={styles.bold}>
              Total before savings.....{`£${getSubTotal(products).toFixed(2)}`}
            </Typography>
          </li>
        </ul>

        <ul>
          {getSavingForItem(products)}
          <li>
            <Typography className={styles.bold}>
              Total savings.....{`£${getTotalSavings(products).toFixed(2)}`}
            </Typography>
          </li>
        </ul>
        <ul>
          <li>
            <Typography className={styles.bold}>
              Total after savings.....{`£${getFinalTotal(products).toFixed(2)}`}
            </Typography>
          </li>
        </ul>
      </Paper>
    </>
  );
};

export default Receipt;
