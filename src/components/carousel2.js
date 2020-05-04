import React from "react";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";

const CarouselWrapper = styled.div`
  /* bottom: 0; */
  position: absolute;
  margin: 1rem;
  max-height: 100px;
  max-width: 900px;
  .carousel-control.left,
  .carousel-control.right {
    background: none;
  }
  .img-responsive,
  .thumbnail > img,
  .thumbnail a > img,
  .carousel-inner > .item > img,
  .carousel-inner > .item > a > img {
    display: block;
    max-width: 100%;
    max-height: 200px;
  }
`;

function Carousell() {
  return (
    <div className="App">
      <CarouselWrapper>
        <Carousel>
          <Carousel.Item>
            <img width={900} height={250} alt="500x500" src="/carousel.png" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={250} alt="900x500" src="/carousel.png" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={250} alt="900x500" src="/carousel.png" />
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
