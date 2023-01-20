/** @format */

import tags from "../../assets/tags.png";
import "./headingTags.css";

import { AiOutlineStar } from "react-icons/ai";
import HeadingTableData from "./HeadingTableData";

const HeadingTags = () => {
  return (
    <div className='heading-tags-wrapper'>
      <h3>Top 100 Cryptocurrencies by Market Cap</h3>
      <div className='tag-wrapper'>
        {/* <img src={tags} alt='tags' className='tagged-iamge' /> */}
        <button className='btn-headings'>
          <AiOutlineStar />
          Favorite
        </button>
        <button className='btn-headings'>Cryptocurrencies</button>
        <button className='btn-headings'>Defi</button>
        <button className='btn-headings'>NFTs and Collectible</button>

        <div className='tables-content-definer'>
          <p>show rows</p>
          <HeadingTableData />
        </div>
      </div>
    </div>
  );
};

export { HeadingTags };
