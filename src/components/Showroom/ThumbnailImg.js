import React, { Component } from 'react';
import styled from 'styled-components';
import { classImg } from '../data';

class ThumbnailImg extends Component {

  // state = {
  //   activeIndex: 0
  // }

  // handleClick = (e) => {
  //   const newActiveIndex = e.target.getAttribute('data-index');
  //   this.setState({ activeIndex: newActiveIndex });
  // };

  render() {
    const { activeIndex, handleClick } = this.props;
    // console.log(activeIndex);
    const gallary = classImg.map( (item, i) => {
      return <li  key={item.id}>
                <img  className="gallary-img" 
                      src={item.imgUrl} 
                      alt="img"
                      data-index={i} 
                      onClick={handleClick}
                />
             </li>
    });
    return (
      <ThumbnailImgContainer>
        <WindowImg>
          <img className="gallary-img-window" src={classImg[activeIndex].imgUrl} alt="slider"/>
        </WindowImg>
        <MiniImg>
          <ul>
            {gallary}
          </ul>
        </MiniImg>
      </ThumbnailImgContainer>
    );
  }
}
const ThumbnailImgContainer = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const WindowImg = styled.div`
  .gallary-img-window {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0px 3px 15px 0.5px rgba(184,184,184,0.7);
  }
`;
const MiniImg = styled.div`
  ul {
    padding: 0;
    margin: 10px 0 0;
    text-align: center;
    li {
      display: inline;
      list-style: none;
      padding: 0 5px;
      .gallary-img {
      width: 70px;
      cursor: pointer;
      border-radius: 10px;
      }
    } 
  }
`;
export default ThumbnailImg;