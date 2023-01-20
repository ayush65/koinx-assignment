/** @format */

import downArrow from "../../assets/Downarrow.png";
import "./table.css";

const TableHeaderMobile = () => {
  return (
    <thead>
      <tr className='crypto-row-data'>
        <th className='table-header' scope='col'></th>
        <th className='table-header' scope='col'>
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
      </tr>
    </thead>
  );
};

export { TableHeaderMobile };
