import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useSocket } from "../../../context/socket";
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
