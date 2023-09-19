import { createContext, useContext, useEffect, useState } from "react";
import { useSocket } from "../../../context/socket";

export const priceContext = createContext(null);
export const usePrice = () => useContext(priceContext);

const PriceProvider = ({ children }) => {
  const { socket } = useSocket();
  const [cryptoPrices, setCryptoPrices] = useState([]);
  const [pages, setPages] = useState(1);
  const [currencies, setCurrencies] = useState([]);

  // fetch currencies
  useEffect(()=>{
    fetchCurrenies();
  }, [])

  useEffect(() => {
    socket.on("cryptoPrices", (data) => {
      // save just 100 lastest elements
      const cryptoPrices = data.cryptoPrices.slice(0, 100);

      setCryptoPrices(cryptoPrices);
      setPages(data.pages);
    });

    socket.on("newPrice", (newPrice) => {
      setCryptoPrices((p) => [newPrice, ...p.slice(0, 99)]);
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  const createNewCurrency = async ({ coinName: name, email, description }) => {
    if (!email) throw new Error("email is required");
    if (!name) throw new Error("name is required");

    const res = await fetch(process.env.REACT_APP_HTTP_URL + "/crypto", {
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

  const fetchCurrenies = async () =>{
    const res = await fetch(process.env.REACT_APP_HTTP_URL + "/crypto", {
      method:"GET",
    });
    const data = await res.json();
    setCurrencies(data);
  }

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
