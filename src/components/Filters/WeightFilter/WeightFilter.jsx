import React, { useState } from "react";
import { Container, Input, Label, Title } from "./WeightFilter.syled";
import { ButtonHide } from "../BurningTime/BurningTimeFilter.syled";

export const WeightFilter = () => {
  // Створюємо стан для зберігання обраного значення
  const [selectedValue, setSelectedValue] = useState("");

  const [isHidden, setIsHidden] = useState(false);
  const [buttonTitle, setButtonTitle] = useState("показати більше");

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
    !isHidden ? setButtonTitle("згорнути") : setButtonTitle("показати більше");
  };

  // Функція для обробки зміни значення радіокнопки
  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Container>
      <Title>Вага</Title>
      <Label>
        <Input
          type="radio"
          value="option1"
          checked={selectedValue === "option1"}
          onChange={handleRadioChange}
        />
        50 г
      </Label>

      <Label>
        <Input
          type="radio"
          value="option2"
          checked={selectedValue === "option2"}
          onChange={handleRadioChange}
        />
        80 г
      </Label>

      <Label>
        <Input
          type="radio"
          value="option3"
          checked={selectedValue === "option3"}
          onChange={handleRadioChange}
        />
        100 г
      </Label>

      <Label>
        <Input
          type="radio"
          value="option4"
          checked={selectedValue === "option4"}
          onChange={handleRadioChange}
        />
        120 г
      </Label>

      <Label>
        <Input
          type="radio"
          value="option5"
          checked={selectedValue === "option5"}
          onChange={handleRadioChange}
        />
        150 г
      </Label>
      {isHidden && (
        <>
          <Label>
            <Input
              type="radio"
              value="option6"
              checked={selectedValue === "option6"}
              onChange={handleRadioChange}
            />
            200 г
          </Label>

          <Label>
            <Input
              type="radio"
              value="option7"
              checked={selectedValue === "option7"}
              onChange={handleRadioChange}
            />
            250 г
          </Label>
        </>
      )}

      <ButtonHide onClick={toggleVisibility}>{buttonTitle}</ButtonHide>
      {/* <p>Обрано: {selectedValue}</p> */}
    </Container>
  );
};
