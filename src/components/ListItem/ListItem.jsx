import { IconButton } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircle";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircle";
import React from "react";
import styles from "./ListItem.module.scss";

const ListItem = ({ title, numberAdded, price, handleAdd, handleRemove }) => {
  return (
    <div className={styles.container}>
      <div>
        <p>{title}</p>
      </div>
      <div>
        <p>{`£${price.toFixed(2)}`}</p>
      </div>
      <div>
        <IconButton onClick={handleRemove} aria-label="remove">
          <RemoveCircleOutlineIcon />
        </IconButton>
        <p>{numberAdded}</p>
        <IconButton onClick={handleAdd} aria-label="add">
          <AddCircleOutlineIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ListItem;
