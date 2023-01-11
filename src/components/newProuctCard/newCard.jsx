import React from "react";
import cart from "../../assets/icons/shopI.svg";
import heart from "../../assets/icons/favourite.svg";
import shuffle from "../../assets/icons/shuffle.svg";
import styled from "styled-components";
import { colors } from "../../config/mui-config";
import { Zoom } from "react-reveal";
import { useMediaQuery } from "@mui/material";

export const NewCard = (props) => {
  const { img, name, price } = props;
  const lg = useMediaQuery("(max-width:750px)");
  return (
    <CardWrap md={lg}>
      <img src={img} alt="" />
      <NewText>new</NewText>
      <CardButtons>
        <Zoom buttom>
          <button>
            <img src={heart} alt="" />
          </button>
          <button>
            <img src={shuffle} alt="" />
          </button>
        </Zoom>
      </CardButtons>
      <CardInfo>
        <CardName>{name}</CardName>
        <CardBottom>
          <strong>${price}</strong>
          <button>
            <img src={cart} alt="" />
          </button>
        </CardBottom>
      </CardInfo>
    </CardWrap>
  );
};
const CardWrap = styled.div`
  max-width: ${(props) => (!props.md ? "302px" : "250px")};
  background: #ffffff;
  box-shadow: 0px 0px 11.83px 1.17px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
  position: relative;
  img {
    max-width: inherit;
  }
  button {
    display: ${(props) => (!props.md ? "none" : "block")};
  }
  :hover {
    button {
      display: block;
    }
  }
`;
const NewText = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  display: block;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  text-transform: capitalize;
  padding: 5px;
  color: ${colors.white};
  border-radius: 4px;
  background-color: ${colors.primary};
`;
const CardInfo = styled.div`
  padding: 18px;
`;
const CardBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    display: block !important;
    border: none;
    background: #f6f6f6;
    width: 40px;
    height: 40px;
    text-align: center;
    font-weight: 400;
    line-height: 40px;
    font-size: 16px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    padding-top: 6px;
    transition: all 0.3s;
    :hover {
      background-color: ${colors.primary};
    }
    img {
      width: 20px;
    }
  }
`;
const CardName = styled.p`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${colors.secondary};
  margin-bottom: 35px;
`;
const CardButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  position: absolute;
  left: 108px;
  bottom: 184px;
  transition: all 0.4s;
  button {
    border: none;
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 100px;
    padding-top: 6px;
    transition: all 0.4s;
    :hover {
      background-color: ${colors.primary};
    }
  }
`;
