import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { Container, Input, Label } from "./PriceSlider.styled";
import "./PriceSlider.css";
import { StyledButton } from "../Button/Button.styled";

export const PriceRangeSlider = ({ min, max }) => {
  const [range, setRange] = useState([50, 500]);

  const handleRangeChange = (newRange) => {
    setRange(newRange);
  };

  const formatInputValue = (value) => {
    if (value >= 2000) {
      return "2000+";
    } else if (value < 0) {
      return "0";
    }
    return value.toString();
  };

  const handleInputChange = (e, index) => {
    const newValue = parseInt(e.target.value);

    if (!isNaN(newValue)) {
      const newRange = [...range];
      newRange[index] = newValue > 2000 ? 2000 : Math.max(0, newValue);
      setRange(newRange);
    }
  };

  return (
    <Container>
      <Label>Ціна</Label>
      <br />
      <Input
        style={{ marginRight: "38px" }}
        placeholder={`${formatInputValue(range[0])}₴`}
        value={formatInputValue(range[0])}
        onChange={(e) => handleInputChange(e, 0)}
      />
      <Input
        placeholder={`${formatInputValue(range[1])}₴`}
        value={formatInputValue(range[1])}
        onChange={(e) => handleInputChange(e, 1)}
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
      <StyledButton style={{ margin: "0 auto" }} lg="true">
        Застосувати
      </StyledButton>
    </Container>
  );
};
