import React, { Component } from 'react';
// import styled from 'styled-components';
import './NavButton.css';

class NavButton extends Component {
  
  render() {
    const { handleClick, buttonClick } = this.props;
    // const { buttonClick } = this.state;
    console.log(buttonClick);

    let classNames = 'button-menu';
    if(buttonClick) {
      classNames += ' active';
    }
    return (
      // <ButtonMenu>
      <div className={classNames}
        onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>  
      // </ButtonMenu>
    );
  }
}
// const ButtonMenu = styled.div`
//   width: 60px;
//   height: 60px;
//   display: none;
//   border-radius: 10px;
//   position: relative;
//   z-index: 3;
//   cursor: pointer;
//   span {
//     position: absolute;
//     width: 30px;
//     height: 2px;
//     background-color: #8c8c8c;
//     display: block;
//     top: calc(50% - 1px);
//     left: calc(29% - 1px);
//     transition: 0.5s;
//     &:nth-child(1) {
//     transform: translateY(-10px);
//     }
//     &:nth-child(1) {
//     transform: ${ props => props.buttonClick ? "translateY(0px) rotate(45deg)" : "translateY(-10px)" };
//     }
//     &:nth-child(3) {
//       transform: translateY(10px);
//     }
//   }
//     @media (max-width: 768px) {
//       display: block;
//     }
// `;
export default NavButton;