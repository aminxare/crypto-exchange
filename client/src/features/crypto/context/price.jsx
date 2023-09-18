import { createContext, useContext, useEffect, useState } from "react";
import { useSocket } from "../../../context/socket";

export const priceContext = createContext(null);
export const usePrice = () => useContext(priceContext);

const PriceProvider = ({ children }) => {
  const { socket } = useSocket();
  const [cryptoPrices, setCryptoPrices] = useState([]);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    socket.on("cryptoPrices", (data) => {
      setCryptoPrices(data.cryptoPrices);
      setPages(data.pages);
    });

    socket.on("newPrice", (newPrice) => {
      setCryptoPrices((p) => [newPrice, ...p]);
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  return (
    <priceContext.Provider
      value={{
        cryptoPrices,
        pages,
      }}
    >
      {children}
    </priceContext.Provider>
  );
};

export default PriceProvider;
