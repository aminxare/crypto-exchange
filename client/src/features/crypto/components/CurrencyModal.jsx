import AddCurrencyModal from "./AddCurrencyModal";
import { usePrice } from "../context/price";
import { Button } from "@mui/material";
import { useState } from "react";

function CurrencyModal() {
  const { createNewCurrency } = usePrice();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleAddCurrency = (newCurrency) => {
    createNewCurrency(newCurrency);
  };
  return (
    <>
      <Button variant="outlined" onClick={() => setIsModalOpen(true)}>
        Add New Currency
      </Button>
      <AddCurrencyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddCurrency={handleAddCurrency}
      />
    </>
  );
}

export default CurrencyModal;
