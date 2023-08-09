import { useEffect, useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Container,
  IconBox,
  Input,
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
  const cutInput = useRef(null);
  const [isLang, setIsLang] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  const closeOpenInput = (e) => {
    if (cutInput.current && isSearch && !cutInput.current.contains(e.target)) {
      setIsSearch(false);
    }
  };

  document.addEventListener("mousedown", closeOpenInput);

  useEffect(() => {});

  const onSearch = () => {
    setIsSearch(!isSearch);
  };

  const handleToggleMenu = () => {
    setIsLang(!isLang);
  };
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
      <LangBox onClick={handleToggleMenu}>
        {isLang ? <Text>УКР</Text> : <Text>ENG</Text>}
      </LangBox>
      <IconBox ref={cutInput}>
        {!isSearch ? (
          <Search onClick={onSearch} />
        ) : (
          <Input type="text" name="username" />
        )}
        <Link to="/catalog">
          <Favorite />
        </Link>
        <Package />
        <User />
      </IconBox>
    </Container>
  );
};
