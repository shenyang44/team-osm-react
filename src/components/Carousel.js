import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Route, Link } from "react-router-dom";
import SearchForm from "./searchbar";

const CAROUSEL = () => {
  return (
    <>
      <Carousel style={{ width: "30%" }}>
        <Carousel.Item>
          <text>Hello</text>
          alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <text>Hello</text>

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <text></text>

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CAROUSEL;
