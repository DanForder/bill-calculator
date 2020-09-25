import { Typography } from "@material-ui/core";
import React from "react";
import ListItem from "../ListItem";

const ProductList = ({ products, handleAdd, handleRemove }) => {
  const getProducts = () => {
    return products.map((product) => {
      return (
        <ListItem
          title={product.displayName}
          subtitle={`£${product.price.toFixed(2)}`}
          numberAdded={product.numberBought}
          key={product.id}
          handleAdd={() => handleAdd(product.id)}
          handleRemove={() => handleRemove(product.id)}
        />
      );
    });
  };

  return (
    <>
      <Typography variant="h2">Product List</Typography>
      {getProducts()}
    </>
  );
};

export default ProductList;
