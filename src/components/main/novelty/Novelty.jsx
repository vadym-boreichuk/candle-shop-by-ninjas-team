import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "../../cardComponent/Card";
import cards from "../../../assets/cards.json";
import { Box, Container } from "./Novelty.styled.js";

export const Novelty = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    // focusOnSelect: true,
  };
  return (
    <Container>
      <Box>
        {" "}
        <h2>Сезонні новинки</h2>
        <p>переглянути усі</p>
      </Box>

      <Slider {...settings}>
        {cards.map(({ id, name, image, content }) => (
          <Card key={id} image={image} name={name} content={content} />
        ))}
      </Slider>
    </Container>
  );
};
