import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import NavButton from './NavButton/NavButton';
import NavBarMobile from './NavBarMobile/NavBarMobile';
import './Navbar.css';
import $ from "jquery";

class Navbar extends Component {

  state = {
    buttonClick: false,
    isActive: false,
  }
  handleClick = () => {
    this.setState((state) => {
      return {
        buttonClick: !state.buttonClick,
      }
    });
    // console.log(`buttonClick: ${this.state.buttonClick}`);
  };
  // componentDidMount(){
    // $(document).on("click", ".nav_link", function() { 
    //   $(".nav_link").addClass("active").siblings().removeClass("active");
    // });
  // };
  // addLink = () => {
    // let elem = document.getElementsByClassName('nav_link');
    // let elem = document.getElementById('ttt')
    // console.log("elem", elem);
    // console.log(elem.classList.contains('nav_link'));
    // elem[0].classList.add('active').siblings().remove('active');
    // console.log("elem", elem);
  //   this.setState({ isActive: true });
  //   console.log(this.state.isActive);
  // }
  // $(document).on('click', 'nav_link', function() { 
  //     $(this).addClass('active')
  //   }); 
  render() {
    // $(document).on("click", ".nav_link", function() { 
    //   $(".nav_link").addClass("active");
    // });
    // const isActive = this.context.router.route.location.pathname === this.props.to;
    // console.log("isActive", isActive);
    // // console.log(`buttonClick: ${this.state.buttonClick}`);
    // let className = 'nav_link';
    // if (this.state.isActive) {
    //   className += ' active';
    // }
    return (
      <Header >
        <NavBarMobile buttonClick={this.state.buttonClick}/>
        <NavWrapper>
          <Link to='/'>
            <img src="img/logo.png" alt="logo" className="navbar-brand"/>
          </Link>
          <NavLink>
            <li className="nav_item">
              <Link to='/' className="nav_link">
                home
              </Link>
            </li>
            <li className="nav_item">
              <Link to='/product' className="nav_link" >
                products
              </Link>
            </li>
            <li className="nav_item">
              <Link to='/history' className="nav_link">
                history
              </Link>
            </li>
            <li className="nav_item">
              <Link to='/showroom' className="nav_link">
                showroom
              </Link>
            </li>
            <li className="nav_item">
              <Link to='/contact' className="nav_link">
                contact
              </Link>
            </li>
            <li className="nav_item">
              <FontAwesomeIcon icon={faSearch} />
            </li>
          </NavLink>
          <NavButton 
            handleClick={this.handleClick}
            buttonClick={this.state.buttonClick}
          />
        </NavWrapper>
      </Header> 
    );
  }
}
const NavWrapper = styled.nav`
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: space-between;
  .navbar-brand:hover {
    box-shadow: -6px 17px 7px 0px rgba(0,0,0,0.75);
  }
`;
const NavLink = styled.ul`
  padding: 0;
  display: flex;
  justify-content: space-between;
  margin: 0;
  @media (max-width: 768px) {
	display: none;
  }
  .nav_item {
    list-style: none;
    cursor: pointer;
    display: inline-block;
    position: relative;
    &:nth-child(1) {
      width: 72px;
      &:hover::before {
        content: '';
        width: 72px;
        height: 3px;
        top: 25px;
        position: absolute;
        background: #000;
      }
    }
    &:nth-child(2) {
      width: 112px;
      &:hover::before {
        content: '';
        width: 112px;
        height: 3px;
        top: 25px;
        position: absolute;
        background: #000;
      }
    }
    &:nth-child(3) {
      width: 94px;
      &:hover::before {
        content: '';
        width: 94px;
        height: 3px;
        top: 25px;
        position: absolute;
        background: #000;
      }
    }
    &:nth-child(4) {
      width: 127px;
      &:hover::before {
        content: '';
        width: 127px;
        height: 3px;
        top: 25px;
        position: absolute;
        background: #000;
      }
    }
    &:nth-child(5) {
      width: 108px;
      &:hover::before {
        content: '';
        width: 108px;
        height: 3px;
        top: 25px;
        position: absolute;
        background: #000;
      }
    }
    .nav_link {
      font-family: 'Montserrat', sans-serif;
      text-transform: uppercase;
      text-decoration: none;
      letter-spacing: 1px;
      color: #8c8c8c;
      /* color: ${ props => props.online ? "#212121" : "#8c8c8c"}; */
      font-size: 16px;
      font-weight: 300;
      padding: 0 10px;
      letter-spacing: 1.4px;
      /* &.active {
        font-weight: 700;
        olor: #212121;
      } */
      &:hover {
        font-weight: 700;
        color: #212121;
      }
    }
  }
`;
const Header = styled.header`
  max-width: 1170px;
  margin: 0 auto;
  position: relative;
    @media (max-width: 1170px) {
      padding: 0 5%;
    }
`;
export default Navbar;