import React from "react";
import closeimg from "../../assets/icons/closeCart.svg";
import styled from "styled-components";
import { colors } from "../../config/mui-config";
import { useDispatch } from "react-redux/es/exports";
import { removeCard } from "../../redux/slices";
export const WishCard = (props) => {
  const dispatch = useDispatch();
  const { img, name, price, count, id } = props;
  return (
    <WishCardWrap>
      <img src={img} alt="" />
      <WishCardInfo>
        <CardTitle>{name}</CardTitle>
        <CardBtn onClick={() => dispatch(removeCard(id))}>
          <img src={closeimg} alt="" />
        </CardBtn>
        <CardPrice>
          {count}X<strong>${price}</strong>
        </CardPrice>
      </WishCardInfo>
    </WishCardWrap>
  );
};
const WishCardWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #eeeeee;
  img {
    width: 72px;
    height: 72px;
  }
`;
const WishCardInfo = styled.div`
  padding: 0 0 30px 18px;
  position: relative;
  button {
    border: none;
    background-color: inherit;
  }
  img {
    width: auto;
    height: auto;
  }
`;
const CardTitle = styled.h5`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  text-transform: capitalize;
  color: ${colors.secondary};
  margin-bottom: 16px;
`;
const CardPrice = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  text-transform: capitalize;
  color: ${colors.secondary};
`;
const CardBtn = styled.button`
  position: absolute;
  top: -18px;
  right: -12px;
`;
