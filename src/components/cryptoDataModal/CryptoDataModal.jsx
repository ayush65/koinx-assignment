/** @format */

import { useCrypto } from "../../context/CryptoContext";
import { AiOutlineClose } from "react-icons/ai";
import { MdArrowDropUp } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
import "./cryptoDataModal.css";

const CryptoDataModal = ({ setIsOpen, isOpen }) => {
  const { cryptoData, currentItemId } = useCrypto();
  const foundCrypto = cryptoData.find(
    (data) => data.market_cap_rank === currentItemId
  );

  return (
    <>
      {isOpen && (
        <div className='modal'>
          <div className='modal-content'>
            <header className='modal-header'>
              <div className='logo-title'>
                <img
                  src={foundCrypto?.image}
                  alt={foundCrypto?.name}
                  width='24px'
                  height='24px'
                />
                <h2>{foundCrypto?.name}</h2>
              </div>
              <button className='close-btn' onClick={() => setIsOpen()}>
                <AiOutlineClose />
              </button>
            </header>
            <main className='modal-info'>
              <div className='modal-info-wrapper-one'>
                <div className='crypto-price'>
                  <span className='tag-title'>PRICE</span>
                  {foundCrypto?.current_price}
                </div>
                <div
                  className={
                    foundCrypto?.price_change_percentage_24h >= 0
                      ? "text-success crypto-oneday-price"
                      : "text-danger crypto-oneday-price"
                  }>
                  <span className='tag-title'>24H</span>
                  <div className='modified-data'>
                    {foundCrypto?.price_change_percentage_24h >= 0 ? (
                      <MdArrowDropUp />
                    ) : (
                      <MdArrowDropDown />
                    )}
                    {Math.abs(foundCrypto?.price_change_percentage_24h).toFixed(
                      2
                    )}
                    %
                  </div>
                </div>
                <div
                  className={
                    foundCrypto?.price_change_percentage_7d_in_currency >= 0
                      ? "text-success crypto-sevendat-price"
                      : "text-danger crypto-sevendat-price"
                  }>
                  <span className='tag-title'>7D</span>
                  <div className='modified-data'>
                    {foundCrypto?.price_change_percentage_7d_in_currency >=
                    0 ? (
                      <MdArrowDropUp />
                    ) : (
                      <MdArrowDropDown />
                    )}
                    {Math.abs(
                      foundCrypto?.price_change_percentage_7d_in_currency
                    ).toFixed(2)}
                    %
                  </div>
                </div>
              </div>
              <div className='modal-info-wrapper-two'>
                <div className='crypto-marketcap'>
                  <span className='tag-title'>MARKET CAP</span>
                  {foundCrypto?.market_cap}
                </div>
                <div className='crypto-volume'>
                  <span className='tag-title'>VOLUME(24H)</span>
                  {foundCrypto?.total_volume}
                  <span className='text-muted'>
                    932,071 {foundCrypto?.symbol}
                  </span>
                </div>
                <div className='crypto-supply'>
                  <span className='tag-title'>CIRCULATING SUPPLY</span>
                  {foundCrypto?.circulating_supply}
                </div>
              </div>
            </main>
          </div>
        </div>
      )}
    </>
  );
};

export { CryptoDataModal };
