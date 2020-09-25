import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Receipt from "./components/Receipt";
import { productData } from "./data/data";
import styles from "./App.module.scss";

const App = () => {
  const [products, setProducts] = useState(productData);
  const handleAdd = (productId) => {
    let newProductArray = products.slice();

    newProductArray.forEach((product) => {
      if (product.id === productId) {
        product.numberBought++;
      }
    });

    setProducts(newProductArray);
  };

  const handleRemove = (productId) => {
    let newProductArray = products.slice();

    newProductArray.forEach((product) => {
      if (product.id === productId && product.numberBought > 0) {
        product.numberBought--;
      }
    });

    setProducts(newProductArray);
  };

  return (
    <>
      <header>
        <Typography variant="h1">Bill Calculator</Typography>
      </header>
      <main className={styles.main}>
        <div>
          <ProductList
            products={products}
            handleAdd={handleAdd}
            handleRemove={handleRemove}
          />
        </div>
        <div>
          <Receipt products={products} />
        </div>
      </main>
    </>
  );
};
export default App;
