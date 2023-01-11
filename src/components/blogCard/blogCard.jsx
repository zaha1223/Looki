import { useMediaQuery } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { colors } from "../../config/mui-config";

export const BlogCard = (props) => {
  const lg = useMediaQuery("(max-width:460px)");
  const { img, name } = props;
  return (
    <Card md={lg}>
      <ImgWrap>
        <img src={img} alt="" />
      </ImgWrap>
      <CardInfo>
        <p>FASHION</p>
        <CardName>{name}</CardName>
        <CardDate>
          Posted by <span>HasTech</span> 12TH Nov 2023
        </CardDate>
      </CardInfo>
    </Card>
  );
};
const Card = styled.div`
  max-width: ${(props) => (!props.md ? "100%" : "250px")};
`;
const CardInfo = styled.div`
  padding-top: 20px;
`;
const CardName = styled.h5`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-transform: capitalize;
  margin: 9px 0 16px 0;
  color: ${colors.secondary};
`;
const CardDate = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-transform: capitalize;
  color: #565656;
  span {
    color: ${colors.primary};
  }
`;
const ImgWrap = styled.div`
  overflow: hidden;
  img {
    transition: all 0.3s;
  }
  :hover {
    img {
      transform: scale(1.1);
    }
  }
`;
