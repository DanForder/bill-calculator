import React from "react";
import ActionTile from "../ActionTile";
import styles from "./HomeScreen.module.scss";

const HomeScreen = () => {
  return (
    <div className={styles.container}>
      <h1>Bill Calculator 2</h1>
      <h2>Extreme Deals</h2>
      <nav className={styles.navContainer}>
        <ActionTile
          link="game"
          header="Game Mode"
          description=" Put your shopping and puzzle skills to the test... Use your groceries and today's deals to match the target price!"
        />
        <ActionTile
          link="browse"
          header="Browse Mode"
          description="Casual shopping for the casual shopper."
        />
      </nav>
    </div>
  );
};

export default HomeScreen;
