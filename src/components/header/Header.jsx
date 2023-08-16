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
  ContainerBox,
} from "./Header.styled";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as Favorite } from "../../assets/icons/favorite.svg";
import { ReactComponent as Package } from "../../assets/icons/package.svg";
import { ReactComponent as Search } from "../../assets/icons/search.svg";
import { ReactComponent as User } from "../../assets/icons/user.svg";

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
    <ContainerBox>
      <Container>
        <NavLink to="/main">
          <Logo />
        </NavLink>
        <Navigation>
          <StyledLink style={{ fontWeight: "500" }} to="/main">
            Головна
          </StyledLink>
          <StyledLink style={{ fontWeight: "500" }} to="/catalog">
            Каталог
          </StyledLink>
          <StyledLink style={{ fontWeight: "500" }} to="/about">
            Про бренд
          </StyledLink>
          <StyledLink style={{ fontWeight: "500" }} to="/packing">
            Упакування
          </StyledLink>
          <StyledLink style={{ fontWeight: "500" }} to="/contacts">
            Контакти
          </StyledLink>
        </Navigation>
        <LangBox onClick={handleToggleMenu}>
          <Text> {isLang ? "УКР" : "ENG"}</Text>
        </LangBox>
        <IconBox ref={cutInput}>
          {!isSearch ? (
            <Search onClick={onSearch} />
          ) : (
            <Input type="text" name="username" />
          )}
          <Link to="/favorite">
            <Favorite />
          </Link>
          <Link to="/cart">
            <Package />
          </Link>

          <Link to="/user">
            <User />
          </Link>
        </IconBox>
      </Container>
    </ContainerBox>
  );
};
