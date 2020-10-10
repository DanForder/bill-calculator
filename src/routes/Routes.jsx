import { Router } from "@reach/router";
import React from "react";
import HomeScreen from "../components/HomeScreen";
import ShopScreen from "../components/ShopScreen";

const NotFound = () => <h2>Not Found</h2>;

const Routes = () => {
  return (
    <Router>
      <HomeScreen path="/" />
      <ShopScreen gameMode={true} path="game" />
      <ShopScreen gameMode={false} path="browse" />
      <NotFound default />
    </Router>
  );
};

export default Routes;
