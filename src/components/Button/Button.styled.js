import styled from "styled-components";

export const StyledButton = styled.button`
  width: ${(props) => {
    if (props.sm) return "123px";
    if (props.md) return "270px";
    if (props.lg) return "324px";
    return "123px";
  }};
  height: ${(props) => {
    if (props.sm) return "35px";
    if (props.md) return "70px";
    if (props.lg) return "75px";
    return "35px";
  }};
  font-size: ${(props) => {
    if (props.sm) return "16px";
    if (props.md) return "32px";
    if (props.lg) return "40px";
    return "16px";
  }};
  padding: ${(props) => {
    if (props.sm) return "18px 26px";
    if (props.md || props.lg) return "20px 72px";
    return "18px 26px";
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  background-color: rgba(96, 12, 38, 1);
  border: none;
  border-radius: 44px;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: rgba(140, 12, 38, 1);
  }
`;
