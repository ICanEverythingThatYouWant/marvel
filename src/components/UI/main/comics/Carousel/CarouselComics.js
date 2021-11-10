import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CarouselComics.css';
import ComicsItem from '../ComicsItem';
/* eslint-disable */
export default function CarouselComics({ items }) {
  console.log(items);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Container>

      <Slider {...settings}>
        {items.map((item) => (
          <ComicsItem classname="item-carousel" item={item} />
        ))}
      </Slider>
    </Container>
  );
}
