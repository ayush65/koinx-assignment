/** @format */

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./headingTags.css";

const HeadingTableData = () => {
  const dataArr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data") || dataArr[0])
  );

  const handleChange = ({ target }) => {
    const index = target.options.selectedIndex;

    setData(dataArr[index]);
    window.location.reload(false);
  };

  console.log(data);

  useEffect(() => {
    const jsonData = JSON.stringify(data);

    // save to localStorage
    localStorage.setItem("data", jsonData);
  }, [data]);
  return (
    <div className='data-select-container'>
      <p className='data-select-heading'>{data}</p>
      <select onChange={handleChange} className='variation-select'>
        {dataArr.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default HeadingTableData;
