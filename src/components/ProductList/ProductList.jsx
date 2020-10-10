import React from "react";
import ListItem from "../ListItem";
import styles from "./ProductList.module.scss";

const ProductList = ({ products, handleAdd, handleRemove }) => {
  const getProducts = () => {
    return products.map((product) => {
      return (
        <ListItem
          title={product.displayName}
          price={product.price}
          numberAdded={product.numberBought}
          key={product.id}
          handleAdd={() => handleAdd(product.id)}
          handleRemove={() => handleRemove(product.id)}
        />
      );
    });
  };

  return (
    <div>
      <div className={styles.headerContainer}>
        <div>
          <h3>Groceries</h3>
        </div>
        <div>
          <h3>Price</h3>
        </div>
        <div>
          <h3>Quantity</h3>
        </div>
      </div>
      <div>{getProducts()}</div>
    </div>
  );
};

export default ProductList;
