import React from "react";
import styled from "styled-components";
import { colors } from "../../config/mui-config";
import img1 from "../../assets/imgs/shopmodal2.webp";
import img2 from "../../assets/imgs/shop_modal1.webp";

export const ShopModal = () => {
  return (
    <ShopModalList>
      <li>
        <ShopItemList>
          <ShopItemTitle>shop grid</ShopItemTitle>
          <li>Shop Grid 3 Column</li>
          <li>Shop Grid 4 Column</li>
          <li>Shop Grid Left SideBar</li>
          <li>Shop Grid Right SideBar</li>
        </ShopItemList>
      </li>
      <li>
        <ShopItemList>
          <ShopItemTitle>shop list</ShopItemTitle>
          <li>Shop List</li>
          <li>Shop List left sidebar</li>
          <li>Shop List right sidebar</li>
        </ShopItemList>
      </li>
      <li>
        <ShopItemList>
          <ShopItemTitle>shop single</ShopItemTitle>
          <li>Shop single</li>
          <li>Shop Variable</li>
          <li>Shop Affiliate</li>
          <li>Shop Goup</li>
        </ShopItemList>
      </li>
      <li>
        <ShopItemList>
          <ShopItemTitle>Other Pages</ShopItemTitle>
          <li>About page</li>
          <li>Carrt Page</li>
          <li>Checout page</li>
          <li>Compare Page</li>
        </ShopItemList>
      </li>
      <ShopImgs>
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
      </ShopImgs>
    </ShopModalList>
  );
};
const ShopImgs = styled.div`
  display: flex;
  gap: 24px;
  div {
    overflow: hidden;
    img {
      transition: all 0.3s ease;
    }
    :hover {
      img {
        transform: scale(1.2);
      }
    }
  }
`;
const ShopModalList = styled.ul`
  position: absolute;
  left: 0;
  right: 0;
  max-width: inherit;
  display: flex;
  flex-wrap: wrap;
  z-index: 4;
  box-shadow: 0 0 3.76px 0.24px rgb(0 0 0 / 15%);
  margin: 0 15px;
  padding: 30px 15px;
  font-family: "Poppins";
  background-color: ${colors.white};
  li {
    overflow: hidden;
    :hover img {
      transform: scale(1.2);
    }
    flex-grow: 1;
    div {
      height: 300px;
      overflow: hidden;
    }
    img {
      width: 606px;
      height: 193px;
      transition: 0.5s all ease-in-out;
    }
  }
`;

const ShopItemTitle = styled.p`
  font-family: "Poppins";
  color: ${colors.secondary};
  line-height: 1;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
  padding: 0 !important;
  margin-bottom: 20px;
`;
const ShopItemList = styled.ul`
  :last-child {
    margin-right: 61px;
  }
  li {
    text-align: left;
    padding: 0 0 5px;
    color: #565656;
    text-transform: capitalize;
    line-height: 28px;
    font-weight: 400;
    font-size: 14px;

    &:hover {
      padding-left: 4px;
    }
    transition: padding 0.3s;
  }
`;
