/** @format */

import downArrow from "../../assets/Downarrow.png";
import "./table.css";

const TableHeader = () => {
  return (
    <thead>
      <tr className='crypto-row-data'>
        <th className='table-header table-header-mobile' scope='col'>
          #
        </th>
        <th className='table-header table-header-name ' scope='col'>
          NAME
        </th>
        <th className='table-header' scope='col'>
          PRICE
        </th>
        <th className='table-header' scope='col'>
          24H{" "}
          <span>
            <img src={downArrow} alt='down-arrow' />
          </span>
        </th>
        <th className='table-header table-header-mobile' scope='col'>
          7D
        </th>
        <th className='table-header table-header-mobile' scope='col'>
          MARKET CAP
        </th>
        <th className='table-header table-header-mobile' scope='col'>
          VOLUME(24H)
        </th>
        <th className='table-header table-header-mobile' scope='col'>
          CIRCULATING SUPPLY
        </th>
        <th className='table-header table-header-mobile' scope='col'></th>
      </tr>
    </thead>
  );
};

export { TableHeader };
