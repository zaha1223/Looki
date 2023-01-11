import { Typography } from "@mui/material";
import React from "react";
import new1 from "../../assets/imgs/newProduct1.png";
import new2 from "../../assets/imgs/newProduct2.png";
import new3 from "../../assets/imgs/newProduct3.png";
import new4 from "../../assets/imgs/newProduct4.png";
import { nanoid } from "@reduxjs/toolkit";
import { NewCard } from "../newProuctCard/newCard";
import styled from "styled-components";
import { colors } from "../../config/mui-config";
const newProducts = [
  {
    id: nanoid(),
    name: "All Natural Makeup Beauty Cosmetics",
    img: `${new1}`,
    price: "11.90",
  },
  {
    id: nanoid(),
    name: "On Trend Makeup and Beauty Cosmetics",
    img: `${new2}`,
    price: "11.90",
  },
  {
    id: nanoid(),
    name: "The Cosmetics and Beauty brand Shoppe",
    img: `${new3}`,
    price: "$21.51",
  },
  {
    id: nanoid(),
    name: "orginal Age Defying Cosmetics Makeup",
    img: `${new4}`,
    price: "11.90",
  },
];
export const NewProducts = () => {
  return (
    <NewProductSection>
      <div className="container">
        <NewContent>
          <ContentTitle variant="h3">New Arrival products</ContentTitle>
          <Line></Line>
          <Typography variant="bosy1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dignissimos, repellat.
          </Typography>
        </NewContent>
        <div>
          <ProductList>
            {newProducts.map((el) => (
              <NewCard key={el.id} {...el} />
            ))}
          </ProductList>
        </div>
      </div>
    </NewProductSection>
  );
};
const NewProductSection = styled.section`
  padding: 0 0 65px 0;
`;
const NewContent = styled.div`
  text-align: center;
  margin-bottom: 34px;
`;
const ContentTitle = styled(Typography)`
  margin-bottom: 15px !important;
`;
const Line = styled.span`
  display: block;
  width: 60px;
  height: 2px;
  justify-content: center;
  margin: 0 auto 15px auto;
  background-color: ${colors.primary};
`;
const ProductList = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
  padding: 15px;
`;
