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
  .carousel-caption {
    bottom: 0;
  }
`;

function Carousell() {
  return (
    <div className="App">
      <CarouselWrapper>
        <Carousel>
          <Carousel.Item>
            <img src={banner} alt="500x500" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={banner} alt="900x500" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={banner} alt="900x500" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </CarouselWrapper>
    </div>
  );
}

export default Carousell;
