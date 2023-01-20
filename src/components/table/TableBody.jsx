/** @format */

import star from "../../assets/Star.png";
import moreOptions from "../../assets/MoreOptions.png";
import { MdArrowDropUp } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
import "./table.css";
import { useCrypto } from "../../context/CryptoContext";
import { ProgressBar } from "../progressBar/ProgressBar";

const TableBody = ({
  id,
  imgURL,
  name,
  symbol,
  price,
  oneDayPriceChange,
  sevenDaysPriceChange,
  marketcap,
  volume,
  circulatingSupply,
  onClick,
  setIsOpen,
}) => {
  const { setCurrentItemId } = useCrypto();
  const openModal = (id) => {
    setIsOpen(true);
    setCurrentItemId(id);
  };
  return (
    <>
      <tr className='divider' onClick={() => openModal(id)}>
        <th scope='row'>
          <div className='crypto-id'>
            <img src={star} alt='star' />
            <span>{id}</span>
          </div>
        </th>
        <td className='crypto-row-data'>
          <div className='crypto-name'>
            <img src={imgURL} alt={name} width='24px' height='24px' />
            <p>{name}</p>
            <span className='text-muted'>{symbol.toUpperCase(symbol)}</span>
          </div>
        </td>
        <td className='crypto-price crypto-row-data '>${price}</td>
        <td className='crypto-oneday-price-wrapper crypto-row-data '>
          <div
            className={
              oneDayPriceChange >= 0
                ? "text-success crypto-oneday-price-table"
                : "text-danger crypto-oneday-price"
            }>
            {oneDayPriceChange >= 0 ? <MdArrowDropUp /> : <MdArrowDropDown />}
            {Math.abs(oneDayPriceChange).toFixed(2)}%
          </div>
        </td>
        <td className='crypto-sevenday-price-wrapper crypto-row-data '>
          <div
            className={
              sevenDaysPriceChange >= 0
                ? "text-success crypto-sevenday-price"
                : "text-danger crypto-sevenday-price"
            }>
            {sevenDaysPriceChange >= 0 ? (
              <MdArrowDropUp />
            ) : (
              <MdArrowDropDown />
            )}
            {Math.abs(sevenDaysPriceChange).toFixed(2)}%
          </div>
        </td>
        <td className='crypto-market-cap crypto-row-data '>${marketcap}</td>
        <td className='crypto-volume-wrapper crypto-row-data '>
          <div className='crypto-volume'>
            <div>${volume}</div>
            <span className='text-muted'>932,071 {symbol}</span>
          </div>
        </td>
        <td className='crypto-supply-wrapper crypto-row-data '>
          <div className='crypto-supply-table'>
            <span>${circulatingSupply}</span>
            <ProgressBar bgColor='gray' progress='70' height={8} />
          </div>
        </td>
        <td className='crypto-more-option crypto-row-data '>
          <img src={moreOptions} alt='more' />
        </td>
      </tr>
    </>
  );
};

export { TableBody };
