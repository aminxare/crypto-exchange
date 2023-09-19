import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { usePrice } from "../context/price";

const CryptoList = () => {
  const { cryptoPrices } = usePrice();

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Crypto Price List
      </Typography>
      <List>
        {cryptoPrices.map((crypto, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={`${crypto.id} - ${crypto.coin}: $${crypto.price}`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default CryptoList;
