import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBarMobile.css';

class NavBarMobile extends Component {
  render() {
    const { buttonClick } = this.props;
    console.log(buttonClick);

    let classNames = 'nav_bar__mobile';
    if(buttonClick) {
      classNames += ' active';
    }

    return (
      // <NavLinkMobile>
      <ul className={classNames}>
        <li className="nav_item__mobile">
          <Link to='/' className="nav_link__mobile">
            home
          </Link>
        </li>
        <li className="nav_item__mobile">
          <Link to='/product' className="nav_link__mobile">
            products
          </Link>
        </li>
        <li className="nav_item__mobile">
          <Link to='/history' className="nav_link__mobile">
            history
          </Link>
        </li>
        <li className="nav_item__mobile">
          <Link to='/showroom' className="nav_link__mobile">
            showroom
          </Link>
        </li>
        <li className="nav_item__mobile">
          <Link to='/contact' className="nav_link__mobile">
            contact
          </Link>
        </li>
      </ul>  
      // </NavLinkMobile> 
    );
  }
}
// const NavLinkMobile =styled.ul`
//   position: absolute;
//   background: #fff;
//   width: 100%;
//   top: -260px;
//   transition: 0.5s;
//   left: 0;
//   margin: 0;
//   padding: 0;
//   & .nav_item__mobile {
//     list-style: none;
//     padding: 15px 0 15px 15px;
//     & .nav_link__mobile {
//       font-family: 'Montserrat', sans-serif;
//       text-transform: uppercase;
//       text-decoration: none;
//       letter-spacing: 1px;
//       color: #8c8c8c;
//       font-size: 16px;
//       font-weight: 300;
//     }
//   }
// `;
export default NavBarMobile;