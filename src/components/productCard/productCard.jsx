import React from "react";
import styled from "styled-components";
import icon from "../../assets/icons/shopI.svg";
import { colors } from "../../config/mui-config";
import heart from "../../assets/icons/favourite.svg";
import shuffle from "../../assets/icons/shuffle.svg";
import { Zoom } from "react-reveal";
import { addCard } from "../../redux/slices";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "@mui/material";
import { products } from "../products/products";
export const ProductCard = (props) => {
  const { name, img, price } = props;
  const dispatch = useDispatch();
  const elements = products.map((el) => el.id);
  const lg = useMediaQuery("(max-width:750px)");














  return (
    <>
      <Card md={lg}>
        <CardImg src={img} alt="" />
        <CardNew>new</CardNew>
        <CardInfo>
          <CardName>{name}</CardName>
          <div>
            <CardPrice>${price}</CardPrice>
            <button>
              <img src={icon} width="20px" alt="" />
            </button>
          </div>
        </CardInfo>
        <Buttons>
          <Zoom buttom>
            <button
              md={lg}
              onClick={() => dispatch(addCard({ ...props, elements }))}
            >
              <img src={heart} alt="" />
            </button>
            <button md={lg}>
              <img src={shuffle} alt="" />
            </button>
          </Zoom>
        </Buttons>
      </Card>
    </>
  );
};
const Card = styled.div`
  max-width: ${(props) => (!props.md ? "302px" : "250px")};
  height: auto;
  position: relative;
  transition: all 0.2s ease;
  background: #ffffff;
  box-shadow: 0px 0px 11.83px 1.17px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
  :hover {
    button {
      display: block;
    }
  }
  button {
    display: ${(props) => (!props.md ? "none" : "block")};
    border: none;
    background: #f6f6f6;
    border-radius: 20px;
    width: 40px;
    height: 40px;
    transition: all 0.4s;
    :hover {
      background-color: ${colors.primary};
    }
  }
`;
const CardImg = styled.img`
  max-width: inherit;
`;
const Buttons = styled.div`
  display: flex;
  gap: 15px;
  position: absolute;
  top: 230px;
  left: 110px;
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
const CardNew = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  text-transform: capitalize;
  color: ${colors.white};
  background-color: ${colors.primary};
  border-radius: 4px;
  padding: 5px;
`;
const CardPrice = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 28px;
  color: ${colors.secondary};
`;
const CardInfo = styled.div`
  padding: 18px;
  div {
    display: flex;
    justify-content: space-between;
  }
  button {
    border: none;
    display: block;
    background: #f6f6f6;
    border-radius: 20px;
    width: 40px;
    height: 40px;
    transition: all 0.3s ease;
    :hover {
      background-color: ${colors.primary};
    }
  }
`;
