import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  padding: 0 75px;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Title = styled.h2`
  font-family: "Corsiva";
  font-weight: 400px;
  font-size: 64px;
  line-height: 70px;
`;

export const StyledLink = styled(Link)`
  color: #050505;
  text-decoration: none;
  border-bottom: solid 1px black;
`;
