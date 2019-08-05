import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

class SliderItem extends Component {
  render() {
    return (
      <ContainerSliderItem>
        <h1>trending</h1>
        <p className="title">fishnet chair</p>
        <p className="parag">Seat and back with upholstery made of cold cure foam. Steel frame, available in matt powder-coated black or highly polished chrome.</p>
        <Link to='/' className="slider-item-link">
          order us <FontAwesomeIcon className="arrow" icon={faChevronRight} />
        </Link>
      </ContainerSliderItem>
    );
  }
}
const ContainerSliderItem = styled.div`
  /* margin: 270px 5% 130px; */
  margin: 20% 5% 130px;
  h1 {
    font-family: "Montserrat-Bold", sans-serif;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 1.8px;
    text-transform: uppercase;
    color: #43a047;
    margin-bottom: 0;
  }
  .title {
    font-family: "Montserrat", sans-serif;
    font-weight: 100;
    font-size: 62px;
    text-transform: uppercase;
    color: #212121;
    letter-spacing: -0.04em;
    margin: 0;
  }
  .parag {
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    font-size: 14px;
    margin: 30px 0 32px;
    color: #6c6c6c;
    max-width: 34em;
  }
  .slider-item-link {
    color: #212121;
    text-transform: uppercase;
    display: inline-block;
    border-radius: 30px;
    background: #fff;
    text-align: center;
    text-decoration: none;
    font-weight: 700;
    padding: 16px 61px 16px 31px;
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    .arrow {
      padding-left: 10px;
    }
    &:hover {
      box-shadow: 0px 3px 15px 0.5px rgba(184,184,184,0.7);
      transition: all 1s ease;
      .arrow {
      transform: translateX(30px);
      transition: all .5s ease-in;
      }
    }
    /* .arrow:hover {
      transform: translateX(20px);
      transition: all .5s ease-in;
    } */
  }
`;
export default SliderItem;