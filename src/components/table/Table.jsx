/** @format */

import { useCrypto } from "../../context/CryptoContext";
import { TableHeader } from "./TableHeader";
import { TableHeaderMobile } from "./TableHeaderMobile";
import "./table.css";
import { TableBody } from "./TableBody";
import { TableBodyMobile } from "./TableBodyMobile";
import { useState } from "react";
import { Footer } from "../footer/Footer";

const Table = ({ setIsOpen }) => {
  const { cryptoData } = useCrypto();
  const [page, setPage] = useState(1);

  return (
    <>
      <div className='table-container'>
        <div className='table-desktop-view'>
          <table>
            <TableHeader />
            <tbody>
              {cryptoData &&
                cryptoData.slice(page * 10 - 10, page * 10).map((res) => {
                  return (
                    <TableBody
                      key={res.market_cap_rank}
                      id={res.market_cap_rank}
                      imgURL={res.image}
                      name={res.name}
                      symbol={res.symbol}
                      price={res.current_price}
                      oneDayPriceChange={res.price_change_percentage_24h}
                      sevenDaysPriceChange={
                        res.price_change_percentage_7d_in_currency
                      }
                      marketcap={res.market_cap}
                      volume={res.total_volume}
                      circulatingSupply={res.circulating_supply}
                      setIsOpen={setIsOpen}
                    />
                  );
                })}
            </tbody>
          </table>
        </div>

        <div className='table-mobile-view'>
          <table>
            <TableHeaderMobile />
            <tbody>
              {cryptoData &&
                cryptoData.slice(page * 10 - 10, page * 10).map((res) => {
                  return (
                    <TableBodyMobile
                      key={res.market_cap_rank}
                      id={res.market_cap_rank}
                      imgURL={res.image}
                      name={res.name}
                      symbol={res.symbol}
                      price={res.current_price}
                      oneDayPriceChange={res.price_change_percentage_24h}
                      sevenDaysPriceChange={
                        res.price_change_percentage_7d_in_currency
                      }
                      marketcap={res.market_cap}
                      volume={res.total_volume}
                      circulatingSupply={res.circulating_supply}
                      setIsOpen={setIsOpen}
                    />
                  );
                })}
            </tbody>
          </table>
        </div>
        <Footer length={cryptoData.length} setPage={setPage} page={page} />
      </div>
    </>
  );
};

export { Table };
