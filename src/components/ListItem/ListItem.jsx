import { Card, CardContent, IconButton, Typography } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import React from "react";
import styles from "./ListItem.module.scss";

const ListItem = ({
  title,
  subtitle,
  numberAdded,
  handleAdd,
  handleRemove,
}) => {
  return (
    <Card>
      <CardContent
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography className={styles.itemText}>{title}</Typography>
        <Typography className={styles.itemText}>{subtitle}</Typography>
        <IconButton onClick={handleRemove} aria-label="remove">
          <RemoveCircleIcon />
        </IconButton>
        <Typography>{numberAdded}</Typography>
        <IconButton onClick={handleAdd} aria-label="add">
          <AddCircleIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default ListItem;
