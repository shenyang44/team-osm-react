import React from "react";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";
import banner from "../img/bloodbanner.jpg";

const CarouselWrapper = styled.div`
  /* bottom: 0; */
  //   position: absolute;
  margin: auto;
  max-height: 100px;
  max-width: 800px;
  .carousel-control.left,
  .carousel-control.right {
    background: none;
  }
  .carousel-indicators {
    display: none;
  }
  .carousel-inner > .item {
    position: relative;
    display: none;
    -webkit-transition: 0.1s ease-in-out left;
    -moz-transition: 0.1s ease-in-out left;
    -o-transition: 0.1s ease-in-out left;
    transition: 0.1s ease-in-out left;
  }
  .img-responsive,
  .thumbnail > img,
  .thumbnail a > img,
  .carousel-inner > .item > img,
  .carousel-inner > .item > a > img {
    display: block;

    max-height: 100px;
  }
  // .carousel-caption {
  //   padding-top: auto;
  //   padding-bottom: auto;
  // }
`;

function Carousell() {
  return (
    <div className="App">
      <CarouselWrapper>
        <Carousel>
          <Carousel.Item>
            <img src={banner} alt="500x500" />
            <Carousel.Caption>
              <p>Your body makes about 2 million new red cells every second</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={banner} alt="900x500" />
            <Carousel.Caption>
              <p>
                When you donate blood, you give just under a pint (about 470ml)
                of blood.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={banner} alt="900x500" />
            <Carousel.Caption>
              <p>
                Donating blood burns calories. But it won’t become a weight loss
                fad any time soon =(
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </CarouselWrapper>
    </div>
  );
}

export default Carousell;
