import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import s from "../../css/Header.module.css";
import { Container, FlexRow, Typography } from "../../App";
import { CatalogContainer } from "../Catalog/CatalogContainer";
import search from "../../images/search.png";
import basket from "../../images/basket.png";
const Header = styled.header`
  box-shadow: 0px 17px 26px -9px rgba(34, 60, 80, 0.12);
  background: ${(props) => props.theme.colors.background};
  display: flex;
  align-items: center;
  height: 80px;
`;
const AppTitle = styled.div`
  font-weight: 600;
  font-size: 24px;
`;
const Navigation = styled.nav`
  font-size: 22px;
`;
const SearchIcon = styled.img`
  width: 30px;
  height: 3 0px;
`;
const HeaderMenu = () => (
  <Header>
    <Container>
      <FlexRow justifyContent={"space-between"} alignItem={"center"}>
        <AppTitle className={s.title}>
          <NavLink to={"/"}>SneakShop.</NavLink>
        </AppTitle>
        <Menu className={s.menu} />
        <FlexRow className={s.actions} justifyContent={"flex-end"}>
          <Search />
          <Basket />
        </FlexRow>
      </FlexRow>
    </Container>
  </Header>
);

export const Menu = () => {
  return (
    <Navigation>
      <FlexRow>
        <Typography
          className={s.item}
          margin={"0px 30px 0px 0px"}
          fontSize={"20px"}
        >
          <NavLink to={"/catalog"} activeClassName={s.activeLink}>
            Каталог
          </NavLink>
        </Typography>
        <Typography
          className={s.item}
          margin={"0px 30px 0px 0px"}
          fontSize={"20px"}
        >
          <NavLink to={"/manShoes"} activeClassName={s.activeLink}>
            Чоловічі
          </NavLink>
        </Typography>
        <Typography
          className={s.item}
          margin={"0px 30px 0px 0px"}
          fontSize={"20px"}
        >
          <NavLink to={"/womanShoes"} activeClassName={s.activeLink}>
            Жіночі
          </NavLink>
        </Typography>
        <Typography
          className={s.item}
          margin={"0px 30px 0px 0px"}
          fontSize={"20px"}
        >
          <NavLink to={"/delivery"} activeClassName={s.activeLink}>
            Доставка
          </NavLink>
        </Typography>
        <Typography
          className={s.item}
          margin={"0px 30px 0px 0px"}
          fontSize={"20px"}
        >
          <NavLink to={"/payInfo"} activeClassName={s.activeLink}>
            Оплата
          </NavLink>
        </Typography>
        <Typography
          className={s.item}
          margin={"0px 30px 0px 0px"}
          fontSize={"20px"}
        >
          <NavLink to={"/aboutUs"} activeClassName={s.activeLink}>
            Про нас
          </NavLink>
        </Typography>
        <Typography
          className={s.item}
          margin={"0px 0px 0px 0px"}
          fontSize={"20px"}
        >
          <NavLink to={"/contacts"} activeClassName={s.activeLink}>
            Контакти
          </NavLink>
        </Typography>
      </FlexRow>
    </Navigation>
  );
};

export const Search = () => {
  const [Search, setSearch] = useState(false);
  const [Input, setInput] = useState("");
  return (
      <FlexRow alignItem={"center"}>
    <button onClick={() => setSearch(true)} >
      <SearchIcon src={search} alt="search" />
      </button>
      {Search && (
        <div>
          <input autoFocus={true}  className={s.input} placeholder="Start Search" value={Input} onChange={(e) => setInput(e.target.value)} onBlur={(e) => { setSearch(false); setInput("") }} type="text" />
        </div>
      )}
   </FlexRow>
  );
};

export const Basket = () => {
  return (
    <button className={s.basket}>
      <SearchIcon src={basket} alt="search" />
    </button>
  );
};

export default HeaderMenu;
