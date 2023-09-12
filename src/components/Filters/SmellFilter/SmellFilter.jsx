import React, { useState } from "react";
import { Container, Input, Label, Title } from "./SmellFilter.syled";
import { ButtonHide } from "../BurningTime/BurningTimeFilter.syled";

export const SmellFilter = () => {
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
      <Title>Ноти</Title>
      <Label>
        <Input
          type="radio"
          value="option1"
          checked={selectedValue === "option1"}
          onChange={handleRadioChange}
        />
        Пряні
      </Label>

      <Label>
        <Input
          type="radio"
          value="option2"
          checked={selectedValue === "option2"}
          onChange={handleRadioChange}
        />
        Деревні
      </Label>

      <Label>
        <Input
          type="radio"
          value="option3"
          checked={selectedValue === "option3"}
          onChange={handleRadioChange}
        />
        квіткові
      </Label>

      <Label>
        <Input
          type="radio"
          value="option4"
          checked={selectedValue === "option4"}
          onChange={handleRadioChange}
        />
        ніжні
      </Label>

      <Label>
        <Input
          type="radio"
          value="option5"
          checked={selectedValue === "option5"}
          onChange={handleRadioChange}
        />
        свіжі
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
            солодкі
          </Label>

          <Label>
            <Input
              type="radio"
              value="option7"
              checked={selectedValue === "option7"}
              onChange={handleRadioChange}
            />
            фруктові
          </Label>
        </>
      )}
      <ButtonHide onClick={toggleVisibility}>{buttonTitle}</ButtonHide>
      {/* <p>Обрано: {selectedValue}</p> */}
    </Container>
  );
};
