import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css"; // Import the default CSS for rc-slider
import { Container, Input, Label } from "./PriceSlider.styled";
import "./PriceSlider.css";
import { StyledButton } from "../Button/Button.styled";

export const PriceRangeSlider = ({ min, max }) => {
  const [range, setRange] = useState([50, 500]); // Initial lower and upper bounds

  const handleRangeChange = (newRange) => {
    setRange(newRange);
  };

  return (
    <Container>
      <Label>Ціна</Label>
      <br />
      <Input
        style={{ marginRight: "38px" }}
        placeholder={`${range[0]}₴`}
        onChange={(e) => setRange([e.target.value, range[1]])}
      />
      <Input
        placeholder={`${range[1]}₴`}
        onChange={(e) => setRange([range[0], e.target.value])}
      />
      <Slider
        style={{ marginBottom: "50px" }}
        min={0}
        max={2000}
        step={1}
        range
        value={range}
        onChange={handleRangeChange}
      />
      {/* <span>{range[0]}</span> - <span>{range[1]}</span> */}
      <StyledButton style={{ margin: "0 auto" }} lg>
        Застосувати
      </StyledButton>
    </Container>
  );
};

// export default PriceRangeSlider;
