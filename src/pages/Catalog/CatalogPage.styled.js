import { styled } from "styled-components";

export const Container = styled.div`
  max-width: 77%;

  display: grid;
  align-content: flex-start;
  justify-content: flex-end;
  grid-column-start: 2;
  grid-template-columns: 1fr 2fr;
  grid-row-gap: 30px; /* Проміжок між рядками */
  grid-column-gap: 15px;
  padding-top: 150px;

  justify-content: flex-end; /* Вирівнювання по лівому краю (горизонталь) */
  align-items: flex-end;
`;
