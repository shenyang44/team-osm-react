import React from "react";
import { UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: "img/bloodbanner.jpg",
    altText: "Slide 1",
    header: "One donation can help save the lives of…",
    caption: "Three adults or six children – pretty good for a day’s work.",
    key: "1"
  },
  {
    src: "img/bloodbanner.jpg",
    altText: "Slide 2",
    header: "Blood has a shelf life",
    caption: "…of just 35 days",

    key: "2"
  },
  {
    src: "img/bloodbanner.jpg",
    altText: "Slide 3",
    header: "Your body makes about 2 million new red cells every second",
    caption:
      "And white cells and platelet levels return to normal within a few days",

    key: "3"
  },
  {
    src: "img/bloodbanner.jpg",
    altText: "Slide 4",
    header: "A blood donation is just under a pint(about 470ml)",
    caption:
      "When you donate blood you give just under a pint (about 470ml) of blood, which works out at no more than 13% of your blood volume.",
    key: "4"
  }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;
