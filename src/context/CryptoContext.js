/** @format */

import { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const cryptoContext = createContext();
const useCrypto = () => useContext(cryptoContext);

const CryptoProvider = ({ children }) => {
  const [cryptoData, setCryptoData] = useState([]);
  const [currentItemId, setCurrentItemId] = useState("");

  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data") || 10)
  );

  console.log("hiii", data);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&amp;order=market_cap_desc&amp;per_page=100&amp;page=1&amp;sparkline=false&amp;price_change_percentage=24h%2C7d"
        );
        console.log(res.data);

        setCryptoData(res.data.slice(0, data));
      } catch (err) {
        console.log(err);
      }
    })();
  }, [data]);

  return (
    <cryptoContext.Provider
      value={{ cryptoData, currentItemId, setCurrentItemId }}>
      {children}
    </cryptoContext.Provider>
  );
};

export { CryptoProvider, useCrypto };
