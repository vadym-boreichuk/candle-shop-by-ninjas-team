import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 250px;
`;

export const Title = styled.h2`
  /* font-family: Montserrat; */
  font-size: 32px;
  font-weight: 600;
  line-height: 39px;
  letter-spacing: 0em;
  text-align: left;
`;

export const Label = styled.label`
  /* font-family: Montserrat; */
  display: flex;
  align-items: center;
  font-size: 32px;
  font-weight: 500;
  line-height: 39px;
  letter-spacing: 0em;
  /* text-align: left; */
`;

export const ButtonHide = styled.button`
  background-color: transparent;
  /* font-family: Montserrat; */
  font-size: 24px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
  border: none;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  margin: 35px 0 75px 0;
`;

export const Input = styled.input`
  appearance: none; /* Приховуємо стандартний вигляд */
  width: 32px;
  height: 32px;
  border: 2px solid rgba(96, 12, 38, 1);
  /* border-radius: 4px; */
  margin-right: 15px; /* За потреби */
  cursor: pointer;
  &:checked {
    background-color: rgba(96, 12, 38, 0.5);
    border-color: rgba(96, 12, 38, 1);
  }
`;
