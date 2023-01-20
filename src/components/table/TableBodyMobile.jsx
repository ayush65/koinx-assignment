/** @format */

import star from "../../assets/Star.png";
import { MdArrowDropUp } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
import "./table.css";
import { useCrypto } from "../../context/CryptoContext";

const TableBodyMobile = ({
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
  setIsOpen,
}) => {
  const { setCurrentItemId } = useCrypto();
  const openModal = (id) => {
    setIsOpen(true);
    setCurrentItemId(id);
  };
  return (
    <>
      <tr className='crypto-row-data divider' onClick={() => openModal(id)}>
        <th scope='row'>
          <div className='crypto-id'>
            <img src={star} alt='star' />
          </div>
        </th>
        <td>
          <div className='crypto-name'>
            <img src={imgURL} alt={name} width='24px' height='24px' />
            <p>{name}</p>
            <span className='text-muted'>{symbol.toUpperCase(symbol)}</span>
          </div>
        </td>
        <td className='crypto-price'>${price}</td>
        <td className='crypto-oneday-price-wrapper '>
          <div
            className={
              oneDayPriceChange >= 0
                ? "text-success crypto-oneday-price"
                : "text-danger crypto-oneday-price"
            }>
            {oneDayPriceChange >= 0 ? <MdArrowDropUp /> : <MdArrowDropDown />}
            {Math.abs(oneDayPriceChange).toFixed(2)}%
          </div>
        </td>
      </tr>
    </>
  );
};

export { TableBodyMobile };
