import React, { Component } from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';
import SimpleSlider from './SimpleSlider';

class Primary extends Component {
  render() {
    return (
      <PrimaryContainer>
        <Navbar />
        <SimpleSlider />
      </PrimaryContainer>
    );
  }
}
const PrimaryContainer = styled.div`
  background: url(img/slider.png) no-repeat center top / cover;
  /* height: 100vh; */
	width: 100%;
`;
export default Primary;