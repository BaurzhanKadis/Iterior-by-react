import React, { Component } from 'react';
import Navbar from '../Navbar';
import styled from 'styled-components';

class Contact extends Component {
  render() {
    return (
      <HeaderContact>
        <Navbar />
        <Title>contact us</Title>
      </HeaderContact>
    );
  }
}
const HeaderContact = styled.div`
  background: #f5f5f5;
  max-width: 1366px;
  /* height: 360px; */
  margin: 0 auto;
`;
const Title = styled.h1`
  width: 1170px;
  margin: 0 auto;
  font-family: "Montserrat-Thin";
  font-size: 62px;
  text-transform: capitalize;
  color: #212121;
  padding-top: 150px;
`;
export default Contact;