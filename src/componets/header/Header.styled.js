import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 106px;
  align-items: center;
  background-color: #fff7f3;
  padding: 0 75px;
  gap: 10px;
`;

export const StyledLink = styled(NavLink)`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-decoration: none;
  color: #050505;
  &.active {
    text-decoration: underline;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 40px;
  margin-left: 130px;
`;

export const LangBox = styled.div`
  display: flex;
  /* padding: 0 17px; */
  justify-content: center;
  align-items: center;
  margin-left: 104px;
  width: 77px;
  height: 24px;
`;

export const Text = styled.p`
  text-decoration: underline;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: #000;
`;

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 65px;
  gap: 18px;
`;
