import { createContext, useContext, useEffect, useState } from "react";
import { useSocket } from "../../../context/socket";

const HTTP_URL = process.env.REACT_APP_HTTP_URL;

export const priceContext = createContext(null);
export const usePrice = () => useContext(priceContext);

const PriceProvider = ({ children }) => {
  const { socket } = useSocket();
  const [cryptoPrices, setCryptoPrices] = useState([]);
  const [pages, setPages] = useState(1);
  const [currencies, setCurrencies] = useState([]);

  // fetch currencies
  useEffect(() => {
    fetchCurrenies();
    fetchPrices();
  }, []);

  useEffect(() => {
    socket.on("newPrice", (newPrice) => {
      setCryptoPrices((p) => [newPrice, ...p.slice(0, 99)]);

      setCurrencies((pCurrencies) => {
        const index = pCurrencies.findIndex((c) => newPrice.coin === c.name);
        pCurrencies[index].price = newPrice.price;
        return [...pCurrencies];
      });
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  const createNewCurrency = async ({ coinName: name, email, description }) => {
    if (!email) throw new Error("email is required");
    if (!name) throw new Error("name is required");

    const res = await fetch(HTTP_URL + "/crypto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        description,
      }),
    });
    fetchCurrenies();
    // TODO: error handling
    console.log("res: ", res);
  };

  const fetchCurrenies = async () => {
    const res = await fetch(HTTP_URL + "/crypto", {
      method: "GET",
    });
    const data = await res.json();
    setCurrencies(data);
  };

  const fetchPrices = async () => {
    const prices = await (await fetch(HTTP_URL + "/crypto-price")).json();
    setCryptoPrices(prices);
  };

  return (
    <priceContext.Provider
      value={{
        cryptoPrices,
        pages,
        currencies,

        createNewCurrency,
      }}
    >
      {children}
    </priceContext.Provider>
  );
};

export default PriceProvider;
