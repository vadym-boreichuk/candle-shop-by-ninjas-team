import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 150px 75px 10px 75px;
  display: flex;
  flex-direction: column;
`;
export const ProductContainer = styled.div`
  /* width: 100%;
  padding: 150px 75px 10px 75px; */
  display: flex;
  position: relative;
`;

export const FilterContainer = styled.div`
  position: relative;
  margin-top: 450px;
`;

export const GridContainer = styled.div`
  /* position: absolute; */
  margin-left: auto;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(3, 1fr);
  /* justify-content: center;
  align-content: center; */
  :nth-child(1) {
    grid-column-start: 2;
  }
  right: 75px;
`;
