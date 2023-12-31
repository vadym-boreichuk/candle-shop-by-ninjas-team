import { Link } from "react-router-dom";
import { styled } from "styled-components";
export const HeroSection = styled.section`
  /* background-color: #f5ebe5; */
  padding: 240px 75px 68px 75px;
  /* margin-top: 240px; */
`;

export const HeroContainer = styled.div`
  // width: 1287px;
  // hight: 807px;
`;

export const HeroContent = styled.div`
  display: flex;
  gap: 31px;
`;

export const HeroText = styled.div`
  width: 819px;
  padding-top: 42px;
`;
export const StyledHeroTitle = styled.div`
  font-family: "Monotype Corsiva";
  font-weight: 500;
  font-size: 92px;

  text-decoration: none;
  color: #000000;
  margin-bottom: 37px;
`;
export const StyledHeroText = styled.div`
  font-family: "Montserat";

  font-size: 32px;
  line-height: 1.38;
  text-decoration: none;
  color: #050505;
  font-size: 32px;
  margin-bottom: 37px;
`;
export const StyledButton = styled.button``;
export const HeroImg = styled.section`
  position: relative;
  border: 2.5px solid rgba(96, 12, 38, 1);
  border-top-right-radius: 281px;
  border-top-left-radius: 281px;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
`;
export const ButtonPlay = styled.section`
  position: absolute;
`;
