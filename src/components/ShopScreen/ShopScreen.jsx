import React, { useEffect, useState } from "react";
import { deals, productData } from "../../data/data";
import ActionTile from "../ActionTile";
import DealsContainer from "../DealsContainer";
import ProductList from "../ProductList";
import Receipt from "../Receipt";
import styles from "./ShopScreen.module.scss";

const ShopScreen = ({ gameMode }) => {
  const [products, setProducts] = useState(productData);
  // const [goalNumberOfItems, setGoalNumberOfItems] = useState(-1);
  const [goalPrice, setGoalPrice] = useState(-1);
  const [gameWon, setGameWon] = useState(false);

  useEffect(() => {
    resetGame();
  }, []);

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

  const getPrice = (price, quantity) => {
    return price * quantity;
  };

  const getReceiptData = () => {
    return products.map((product) => {
      if (product.numberBought > 0) {
        return (
          <li key={product.id}>
            <p>
              {product.displayName} x {product.numberBought}......
              {`£${getPrice(product.price, product.numberBought).toFixed(2)}`}
            </p>
          </li>
        );
      } else {
        return null;
      }
    });
  };

  const getSavingsForItems = (products) => {
    return deals.map((deal) => {
      const saving = Math.round(deal.getSavings(products) * 100) / 100;
      return saving > 0 ? (
        <li key={deal.id}>
          {deal.displayName}...£{saving.toFixed(2)}
        </li>
      ) : null;
    });
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

  const getFinalTotal = (products) => {
    const finalTotal = getSubTotal(products) - getTotalSavings(products);

    if (gameMode && !gameWon) {
      checkWinCondition(finalTotal.toFixed(2));
    }

    return finalTotal;
  };

  const checkWinCondition = (finalTotal) => {
    if (finalTotal === goalPrice.toFixed(2)) {
      console.log("checking");
      setGameWon(true);
    }
  };

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const initialiseGame = () => {
    // setGoalNumberOfItems(randomIntFromInterval(5, 10));
    setGoalPrice(randomIntFromInterval(60, 110) / 20);
    setGameWon(false);
  };

  const resetGame = () => {
    setProducts(
      products.map((product) => {
        product.numberBought = 0;
        return product;
      })
    );

    initialiseGame();
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.gameContainer}>
          <ProductList
            products={products}
            handleAdd={handleAdd}
            handleRemove={handleRemove}
          />
          <div className={styles.chalkBoard}>
            {gameWon ? (
              <div className={styles.gameWonContainer}>
                <p>You win!</p>
              </div>
            ) : (
              <Receipt
                receiptData={getReceiptData(products)}
                itemsSavings={getSavingsForItems(products)}
                totalBeforeSavings={`£${getSubTotal(products).toFixed(2)}`}
                totalSavings={`£${getTotalSavings(products).toFixed(2)}`}
              />
            )}
          </div>
          <DealsContainer />
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.resetContainer}>
            <ActionTile link="/" header="Home" />
            {gameMode && <ActionTile onClick={resetGame} header="Reset" />}
          </div>
          <div className={styles.lowerBar}>
            {/* {gameMode && (
              <div>
                <h3>Max Items</h3>
                <p>{goalNumberOfItems}</p>
              </div>
            )} */}

            {gameMode && (
              <div>
                <h3>Target Price</h3>
                <p>£{goalPrice.toFixed(2)}</p>
              </div>
            )}

            <div className={styles.grandTotalContainer}>
              <h3>Grand Total</h3>
              <p>{`£${getFinalTotal(products).toFixed(2)}`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopScreen;
