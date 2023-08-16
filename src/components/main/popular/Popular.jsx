import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "../../cardComponent/Card";
import cards from "../../../assets/cards.json";
import { Box, Container, Title, StyledLink } from "../novelty/Novelty.styled";

export const Popular = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
  };
  return (
    <Container>
      <Box>
        <Title style={{ fontWeight: "400" }}>Найпопулярніші товари</Title>
        <StyledLink to="/main">переглянути усі</StyledLink>
      </Box>

      <Slider {...settings}>
        {cards.map(({ id, name, image, content }) => (
          <Card key={id} image={image} name={name} content={content} />
        ))}
      </Slider>
    </Container>
  );
};
