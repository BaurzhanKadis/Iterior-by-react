import React, { Component } from 'react';
import styled from 'styled-components';
import { classImg } from '../data';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

class ThumbnailText extends Component {
  render() {
    const { activeIndex} = this.props;
    const hot = (classImg[activeIndex].akcia.length > 1) ? 
                  classImg[activeIndex].akcia :
                  null;
    return (
      <ThumbnailTextContainer>
        <header>
          <div className="title">
            {classImg[activeIndex].title}
          </div>
          <div className="akcia">
            {hot}
          </div>
          <div className="price">
            $ <span>{classImg[activeIndex].price}</span> /sq 
          </div>
          <Link to='/' className="showroom-link">
            order us <FontAwesomeIcon className="arrow" icon={faChevronRight} />
          </Link>
        </header>
      </ThumbnailTextContainer>
    );
  }
}
const ThumbnailTextContainer = styled.div`
  width: 50%;
  header {
    text-align: center;
    padding: 20px;
    .title {
      text-transform: capitalize;
      font-family: "Montserrat", sans-serif;
      padding-bottom: 10px;
      letter-spacing: -1px;
      font-weight: 700;
      font-size: 36px;
      color: #212121;
    }
    .akcia {
      font-family: "Montserrat", sans-serif;
      font-size: 18px;
      color: #e53935;
      font-weight: 700;
      text-transform: uppercase;
    }
    .price {
      font-family: "Gotham Pro Light";
      font-size: 36px;
      & span {
        font-size: 72px;
      }
    }
    .showroom-link {
      color: #fff;
      background: #f44336;
      text-transform: uppercase;
      display: inline-block;
      border-radius: 30px;
      text-align: center;
      text-decoration: none;
      font-weight: 700;
      width: 100%;
      padding: 16px 0;
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
    }
  }
`;
export default ThumbnailText;