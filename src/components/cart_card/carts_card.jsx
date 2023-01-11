import React from "react";
import styled from "styled-components";
import img from "../../assets/imgs/defyingModal.png";
import { colors } from "../../config/mui-config";
import close from "../../assets/icons/closeCart.svg";
export const CartsCard = () => {
  return (
    <CardWrap>
      <CardImg src={img} alt="" />
      <CardInfo>
        <CardTitle>
          orginal Age Defying Cosmetics <br /> Makeup
        </CardTitle>
        <CardBtn>
          <img src={close} alt="" />
        </CardBtn>
        <CardPrice>
          1 x <strong>$100.00</strong>
        </CardPrice>
      </CardInfo>
    </CardWrap>
  );
};
const CardWrap = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 30px;
  border-bottom: 2px solid #eee;
`;
const CardImg = styled.img`
  /* margin-right: 18px; */
`;
const CardInfo = styled.div`
  padding: 0 0 30px 18px;
`;
const CardBtn = styled.button`
  border: none;
  background-color: inherit;
  position: absolute;
  right: 6px;
  top: -12px;
`;
const CardTitle = styled.h5`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  text-transform: capitalize;
  margin-bottom: 16px;
  color: ${colors.secondary};
`;
const CardPrice = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: ${colors.grey};
  strong {
    color: ${colors.secondary};
  }
`;
