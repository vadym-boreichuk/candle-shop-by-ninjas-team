import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const ContainerBox = styled.div`
  background-color: #fff7f3;
`;

export const Container = styled.div`
  display: flex;
  max-width: 1440px;
  height: 106px;
  align-items: center;
  margin: auto;
  padding: 0 75px;
  justify-content: space-between;
`;

export const StyledLink = styled(NavLink)`
  font-family: "Montserat";
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-decoration: none;
  color: #050505;
  &.active {
    border-bottom: solid 2px black;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 40px;
`;

export const LangBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  cursor: pointer;
  user-select: none;
`;

export const Text = styled.p`
  font-family: "Montserat";
  text-decoration: underline;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: #000;
`;

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

export const Input = styled.input`
  width: 45px;
  border: none;
  border-bottom: 2px solid #000;
  background-color: inherit;
  outline: none;
`;
