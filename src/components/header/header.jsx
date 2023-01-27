import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/imgs/logo.svg";
import styled from "styled-components";
import search from "../../assets/icons/search.svg";
import shuffle from "../../assets/icons/shuffle.svg";
import heart from "../../assets/icons/favourite.svg";
import closeimg from "../../assets/icons/close.svg";
import cart from "../../assets/icons/bag.svg";
import { useModal } from "../../hooks/use-modal";
import { Drawer, useMediaQuery } from "@mui/material";
import menu from "../../assets/icons/menu.svg";
import { colors } from "../../config/mui-config";
import { ShopModal } from "../shopModal/ShopModal";
import { HeaderTopSet } from "../headertop/header-top-set";
import { PagesModal } from "../pagesModal/pagesModal";
import { BlogModal } from "../blogModal/blogModal";
import { CartsCard } from "../cart_card/carts_card";
import { WishCard } from "../wishCard/wishCard";
import { useSelector } from "react-redux";
export const Header = () => {
  const lg = useMediaQuery("(max-width:1026px)");
  const md = useMediaQuery("(max-width:450px)");
  const { close, isOpen, open } = useModal();
  const [anchor, setAnchor] = React.useState(false);
  const [isHop, setShop] = React.useState(false);
  const [page, setPage] = React.useState(false);
  const [blog, setBlog] = React.useState(false);
  const [wish, setWish] = React.useState(false);
  const [isMenu, setMenu] = React.useState(false);
  const item = useSelector((el) => el.card.arr);
  return (
    <>
      <HeaderTopSet />
      <div className="container">
        <HeaderNav md={md}>
          <a href="/">
            <img src={logo} alt="site-logo" />
          </a>
          {!lg ? (
            <NavList>
              <Link to="/">
                <NavLinkText onClick={() => setAnchor(!anchor)}>
                  Home
                </NavLinkText>
                {anchor ? (
                  <HomeDrop onMouseEnter={() => setAnchor(true)}>
                    <HomeDropItem>
                      <p>Home 1</p>
                    </HomeDropItem>
                    <HomeDropItem>
                      <p>Home 2</p>
                    </HomeDropItem>
                  </HomeDrop>
                ) : (
                  ""
                )}
              </Link>
              <Link to="/">
                <NavLinkText onClick={() => setShop(!isHop)}>Shop</NavLinkText>
                {isHop ? <ShopModal /> : ""}
              </Link>
              <Link to="/">
                <NavLinkText onClick={() => setPage(!page)}>Pages</NavLinkText>
                {page ? <PagesModal /> : ""}
              </Link>
              <Link to="/">
                <NavLinkText onClick={() => setBlog(!blog)}>Blog</NavLinkText>
                {blog ? <BlogModal /> : ""}
              </Link>
              <Link to="/">
                <NavLinkText>contact Us</NavLinkText>
              </Link>
            </NavList>
          ) : (
            ""
          )}
          {!md ? (
            <IconsList>
              <li>
                <a href="#er">
                  <img src={search} alt="" />
                </a>
              </li>
              <li>
                <IconsLink href="#er">
                  <img src={shuffle} alt="" />
                  <IconSpan>1</IconSpan>
                </IconsLink>
              </li>
              <li>
                <IconsLink onClick={() => setWish(true)} href="#">
                  <img src={heart} alt="" />
                  <IconSpan>{item.length}</IconSpan>
                </IconsLink>
              </li>
              <li>
                <IconsLink onClick={open} href="#er">
                  <img src={cart} alt="" />
                  <IconSpan>3</IconSpan>
                </IconsLink>
              </li>
            </IconsList>
          ) : (
            ""
          )}
          {md ? (
            <MenuBtn onClick={() => setMenu(true)}>
              <img src={menu} alt="" width="40px" />
            </MenuBtn>
          ) : (
            ""
          )}
        </HeaderNav>
      </div>
      <Drawer anchor="right" open={isOpen} onClose={close}>
        <CardModal>
          <CartTop>
            <CartTitle>Cart</CartTitle>
            <img onClick={close} src={closeimg} alt="" />
          </CartTop>
          <CartsCard />
          <CartBottom>
            <CartListPrice>
              <CartPrice>Subtotal:</CartPrice>
              <CartPriceTotal>$144.00</CartPriceTotal>
            </CartListPrice>
            <CartBtns>
              <CartBtn1>view cart</CartBtn1>
              <CartBtn2>checkout</CartBtn2>
            </CartBtns>
            <CartBottomText>
              Free Shipping on All Orders Over $100!
            </CartBottomText>
          </CartBottom>
        </CardModal>
      </Drawer>
      <Drawer anchor="right" open={wish} onClose={() => setWish(false)}>
        <WishModal>
          <WishModalTop>
            <WishModalTitle>Wishlist</WishModalTitle>
            <img onClick={() => setWish(false)} src={closeimg} alt="" />
          </WishModalTop>
          {item.map((el) => (
            <WishCard key={el.id} {...el} />
          ))}
          <WishModalBottom>
            <button>view wishlist</button>
          </WishModalBottom>
        </WishModal>
      </Drawer>
      <Drawer open={isMenu} onClose={() => setMenu(false)} anchor="right">
        wefvwefvbw
      </Drawer>
    </>
  );
};

const CardModal = styled.div`
  padding: 20px;
`;
const CartTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.grey};
  margin-bottom: 25px;
`;
const CartBottom = styled.div``;
const CartListPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: 2px solid #eee;
`;
const CartPrice = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: ${colors.secondary};
`;
const CartPriceTotal = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: ${colors.primary};
`;
const CartBtns = styled.div`
  margin-top: 30px;
  margin-bottom: 14px;
`;
const CartBtn1 = styled.button`
  border: none;
  background: ${colors.primary};
  border: 1px solid ${colors.primary};
  font-family: "Raleway";
  font-style: normal;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 14px;
  color: ${colors.white};
  margin-right: 12px;
  padding: 15px 30px;
`;
const CartBtn2 = styled.button`
  border: none;
  padding: 15px 30px;
  background: ${colors.secondary};
  border: 1px solid ${colors.secondary};
  font-family: "Raleway";
  font-style: normal;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 14px;
  color: ${colors.white};
`;
const CartBottomText = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: ${colors.secondary};
`;
const CartTitle = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: ${colors.secondary};
  margin-right: 284px;
`;

//WishModal
const WishModal = styled.div`
  padding: 20px;
`;
const WishModalTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eeeeee;
`;
const WishModalBottom = styled.div`
  button {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    text-align: center;
    text-transform: uppercase;
    color: ${colors.white};
    border: none;
    padding: 15px 30px;
    background: ${colors.primary};
    border: 1px solid ${colors.primary};
  }
`;
const WishModalTitle = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: ${colors.secondary};
  margin-right: 257px;
`;

const HeaderNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: ${colors.white};
  transition: all 0.3s;
`;
const HomeDrop = styled.div`
  max-width: 240px;
  position: absolute;
  z-index: 5;
  background-color: ${colors.white};
  box-shadow: 0 0 3.76px 0.24px rgb(0 0 0 / 15%);
`;
const HomeDropItem = styled.li`
  font-weight: 400;
  text-align: left;
  text-transform: capitalize;
  padding: 0;
  color: #565656;
  font-size: 14px;
  line-height: 40px;
  padding: 0 20px;
  border-bottom: 1px solid #eee;
  p {
    max-width: 120px;
    &:hover {
      margin-left: 4px;
    }
    transition: all 0.3s;
  }
`;

const NavLinkText = styled.p`
  position: relative;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 30px;
  text-transform: uppercase;
  color: ${colors.secondary};
  :hover {
    color: ${colors.primary};
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 53px;
`;

const IconsList = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
`;
const IconsLink = styled.a`
  position: relative;
`;
const IconSpan = styled.span`
  position: absolute;
  top: -19px;
  right: -8px;
  background-color: ${colors.primary};
  border-radius: 10px;
  width: 20px;
  height: 20px;
  display: block;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: ${colors.white};
`;
const MenuBtn = styled.button`
  border: none;
  background-color: inherit;
`;
