import React from "react";
import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import { usePrice } from "../context/price";

const CurrencyList = () => {
  const { currencies } = usePrice();
  
  return (
    <Paper elevation={3} style={{ padding: "16px", minWidth:"15em" }} >
      <Typography variant="h6" gutterBottom>
        Currency List
      </Typography>
      <List>
        {currencies.map((currency) => (
          <ListItem key={currency.id}>
            <ListItemText
              primary={currency.name}
            />
            <ListItemText primary={``} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default CurrencyList;
