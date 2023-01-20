/** @format */

import { useState } from "react";
import { caraouselData } from "../../data/caraouselData";
import prevBtn from "../../assets/PrevBtn.png";
import nextBtn from "../../assets/NextBtn.png";
import "./caraousel.css";

const Caraousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSliderHandler = () => {
    setCurrentIndex(
      (currentIndex - 1 + caraouselData.length) % caraouselData.length
    );
  };

  const nextSliderHandler = () => {
    setCurrentIndex((currentIndex + 1) % caraouselData.length);
  };

  return (
    <div className='caraousel-wrapper'>
      <div className='slider-container-wrapper'>
        <button className='prev-slider-btn' onClick={prevSliderHandler}>
          <img src={prevBtn} alt='prev-btn' />
        </button>
        {caraouselData.map((item) => {
          return (
            <div
              key={item.title}
              className={
                caraouselData[currentIndex].id === item.id
                  ? "fade slider-container"
                  : "slide fade slider-container"
              }>
              <div className='slider-wrapper' key={item.id}>
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className='slider-image'
                  />
                </div>
                <div className='slider-info-container'>
                  <p className='slider-title'>{item.title}</p>
                  <p className='slider-desc'>{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
        <button className='next-slider-btn' onClick={nextSliderHandler}>
          <img src={nextBtn} alt='next-btn' />
        </button>
      </div>

      <div className='dots'>
        {caraouselData.map((item) => {
          return (
            <span
              key={item.id}
              className={
                caraouselData[currentIndex].id === item.id
                  ? "dot active"
                  : "dot"
              }
              onClick={() =>
                setCurrentIndex(caraouselData.indexOf(item))
              }></span>
          );
        })}
      </div>
    </div>
  );
};

export { Caraousel };
