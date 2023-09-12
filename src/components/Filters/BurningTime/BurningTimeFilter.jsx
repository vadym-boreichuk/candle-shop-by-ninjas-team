import React, { useState } from "react";
import {
  ButtonHide,
  Container,
  Hidden,
  Input,
  Label,
  Title,
} from "./BurningTimeFilter.syled";

export const BurningTimeFilterList = () => {
  // Створюємо стан для зберігання обраного значення
  const [selectedValue, setSelectedValue] = useState("");

  // Функція для обробки зміни значення радіокнопки
  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const [isHidden, setIsHidden] = useState(false);
  const [buttonTitle, setButtonTitle] = useState("показати більше");

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
    !isHidden ? setButtonTitle("згорнути") : setButtonTitle("показати більше");
  };

  return (
    <Container>
      <Title>Час горіння</Title>
      <Label>
        <Input
          type="radio"
          value="option1"
          checked={selectedValue === "option1"}
          onChange={handleRadioChange}
        />
        до 4 годин
      </Label>

      <Label>
        <Input
          type="radio"
          value="option2"
          checked={selectedValue === "option2"}
          onChange={handleRadioChange}
        />
        5-7 годин
      </Label>

      <Label>
        <Input
          type="radio"
          value="option3"
          checked={selectedValue === "option3"}
          onChange={handleRadioChange}
        />
        8 годин
      </Label>

      <Label>
        <Input
          type="radio"
          value="option4"
          checked={selectedValue === "option4"}
          onChange={handleRadioChange}
        />
        10-12 годин
      </Label>

      <Label>
        <Input
          type="radio"
          value="option5"
          checked={selectedValue === "option5"}
          onChange={handleRadioChange}
        />
        14 годин
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
            16-18 годин
          </Label>

          <Label>
            <Input
              type="radio"
              value="option7"
              checked={selectedValue === "option7"}
              onChange={handleRadioChange}
            />
            20 годин
          </Label>
        </>
      )}

      <ButtonHide onClick={toggleVisibility}>{buttonTitle}</ButtonHide>
      {/* <p>Обрано: {selectedValue}</p> */}
    </Container>
  );
};
