import { NavLink } from "react-router-dom";
import {
  Container,
  IconBox,
  LangBox,
  Navigation,
  StyledLink,
  Text,
} from "./Header.styled";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { ReactComponent as Favorite } from "../../images/favorite.svg";
import { ReactComponent as Package } from "../../images/package.svg";
import { ReactComponent as Search } from "../../images/search.svg";
import { ReactComponent as User } from "../../images/user.svg";

export const Header = () => {
  return (
    <Container>
      <NavLink to="/main">
        <Logo />
      </NavLink>
      <Navigation>
        <StyledLink to="/main">Головна</StyledLink>
        <StyledLink to="/catalog">Каталог</StyledLink>
        <StyledLink to="/about">Про бренд</StyledLink>
        <StyledLink to="/packing">Упакування</StyledLink>
        <StyledLink to="/contacts">Контакти</StyledLink>
      </Navigation>
      <LangBox>
        <Text>УКР</Text>
      </LangBox>
      <IconBox>
        <Search />
        <Favorite />
        <Package />
        <User />
      </IconBox>
    </Container>
  );
};
