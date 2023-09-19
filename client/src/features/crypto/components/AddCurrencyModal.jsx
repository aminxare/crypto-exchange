import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  TextareaAutosize,
} from "@mui/material";

function AddCurrencyModal({ isOpen, onClose, onAddCurrency }) {
  const [coinName, setCoinName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const [errors, setErrors] = useState({
    email: { value: false, text: "" },
    coinName: { value: false, text: "" },
  });

  const handleClose = () => {
    onClose();
    setCoinName("");
    setEmail("");
    setDescription("");
  };

  const checkErrors = () => {
    const regex = new RegExp(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );

    let error = false;
    // check if email is empty
    if (!email) {
      error = true;
      setErrors((pe) => ({
        ...pe,
        email: { value: true, text: "email is required" },
      }));
    }
    // check if email is invalid format
    else if (!regex.test(email)) {
      error = true;
      setErrors((pe) => ({
        ...pe,
        email: { value: true, text: "email is invalid" },
      }));
    }

    if (!coinName) {
      error = true;
      setErrors((pe) => ({
        ...pe,
        coinName: { value: true, text: "coin name is required" },
      }));
    }

    // reset coin errors
    if (!error) {
      setErrors((pe) => ({ ...pe, coinName: { value: false, text: "" } }));
      setErrors((pe) => ({ ...pe, email: { value: false, text: "" } }));
    }

    return error;
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setEmail(email);
    checkErrors();
  };

  const handleCoinNameChange = (e) => {
    const coin = e.target.value;
    setCoinName(coin);
    checkErrors();
  };

  const handleAddCurrency = () => {
    if (checkErrors()) {
      return;
    }

    const newCurrency = {
      coinName,
      email,
      description,
    };
    
    onAddCurrency(newCurrency);
    handleClose();
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Add New Currency</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please fill in the details for the new currency.
        </DialogContentText>
        <TextField
          error={errors.coinName.value}
          autoFocus
          margin="dense"
          label="Coin Name"
          type="text"
          fullWidth
          value={coinName}
          onChange={handleCoinNameChange}
          helperText={errors.coinName.text}
        />
        <TextField
          error={errors.email.value}
          margin="dense"
          label="Email"
          type="email"
          fullWidth
          value={email}
          onChange={handleEmailChange}
          helperText={errors.email.text}
        />
        <TextareaAutosize
          minRows={3}
          placeholder="Description"
          style={{ width: "100%", marginTop: "16px" }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleAddCurrency} color="primary">
          Add Currency
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddCurrencyModal;
