import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SliderItem from './SliderItem';
import './SimpleSlider.css';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dotsClass: "dot-slider-link",
      customPaging: () => (
        <div className="dott"></div>
      )
    };
    return (
      <div>
        <Slider {...settings}>
          <SliderItem />
          <SliderItem />
          <SliderItem />
        </Slider>
      </div>
    );
  }
}