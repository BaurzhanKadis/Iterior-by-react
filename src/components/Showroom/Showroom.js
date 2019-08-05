import React, { Component } from 'react';
import Navbar from '../Navbar';
import { classProduct } from '../data';
import styled from 'styled-components';
import ThumbnailImg from './ThumbnailImg';
import ThumbnailText from './ThumbnailText';

class Showroom extends Component {
  
  state = {
    activeIndex: 0
  }

  handleClick = (e) => {
    const newActiveIndex = e.target.getAttribute('data-index');
    this.setState({ activeIndex: newActiveIndex });
  };

  render() {
    const navBarShowroom = classProduct.map((item, id) => { 
      return <li key={id}>{item}</li> });
    // console.log(classProduct);
    // console.log(navBarShowroom);
    return (
      <div>
        <Navbar />
        <FilterPanel>
          <ul>
            {navBarShowroom}
          </ul>
        </FilterPanel>
        <ThumbnailGallary>
          <ThumbnailImg 
            activeIndex={this.state.activeIndex} 
            handleClick={this.handleClick}
          />
          <ThumbnailText 
            activeIndex={this.state.activeIndex}
          />
        </ThumbnailGallary>
      </div>
    );
  }
}
const FilterPanel = styled.div`
  background-color: #f4f4f4;
  text-align: center;
  & ul {
    padding: 0;
    margin: 0;
    & li {
      list-style: none;
      padding: 20px;
      letter-spacing: 1.8px;
      display: inline-block;
      font-family: 'Montserrat', sans-serif;
      text-transform: uppercase;
      font-weight: 700;
      color: #6c6c6c;
      cursor: pointer;
      &:hover {
        background-color: #eee;
        color: #212121;
      }
    }
  }
`;
const ThumbnailGallary = styled.div`
  display: flex;
  max-width: 1170px;
  /* height: 500px; */
  margin: 50px auto 0;
  /* background-color: #ccc; */
  @media (max-width: 1170px) {
    padding: 0 5%;
  }
  @media (max-width: 768px) {
    display: block;
  }
`;
export default Showroom;