import { Select } from "./DropDown.styled";

import React, { useState } from "react";

export const DropDown = () => {
  const [selectedValue, setSelectedValue] = useState(""); // Стан для збереження вибраного значення

  // Обробник події onChange
  const handleSelectChange = (event) => {
    const selectedOption = event.target.value; // Отримуємо значення, яке користувач вибрав
    setSelectedValue(selectedOption); // Оновлюємо стан із вибраним значенням
  };

  return (
    <div>
      <Select value={selectedValue} onChange={handleSelectChange}>
        <option value="Вiд популярних">Вiд популярних</option>
        <option value="Вiд дешевих">Вiд дешевих</option>
        <option value="Вiд дорогих">Вiд дорогих</option>
        <option value="Новинки">Новинки</option>
      </Select>
      <p>Ви обрали: {selectedValue}</p>
    </div>
  );
};
