import React from "react";
import { Typography } from "@mui/material";
import styled from "styled-components";
import { colors } from "../../config/mui-config";
import { ProductCard } from "../productCard/productCard";
import card1 from "../../assets/imgs/product1.png";
import card2 from "../../assets/imgs/product2.png";
import card3 from "../../assets/imgs/product3.png";
import card4 from "../../assets/imgs/product4.png";
import { nanoid } from "@reduxjs/toolkit";
export const products = [
  {
    id: nanoid(),
    name: "All Natural Makeup Beauty Cosmetics",
    price: "11.90",
    img: `${card1}`,
  },
  {
    id: nanoid(),
    name: "On Trend Makeup and Beauty Cosmetics",
    price: "11.90",
    img: `${card2}`,
  },
  {
    id: nanoid(),
    name: "The Cosmetics and Beauty brand Shoppe",
    price: "21.51",
    img: `${card3}`,
  },
  {
    id: nanoid(),
    name: "orginal Age Defying Cosmetics Makeup",
    price: "11.90",
    img: `${card4}`,
  },
];
export const Products = () => {
  return (
    <ProductSection>
      <div className="container">
        <ProductInfo>
          <ProductTitle variant="h3">Our Products</ProductTitle>
          <Line></Line>
          <ProductText variant="body1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perspiciatis, culpa?
          </ProductText>
        </ProductInfo>
        <ProductList>
          <li>
            <ProductListName>new products</ProductListName>
          </li>
          <li>
            <ProductListName>onsale</ProductListName>
          </li>
          <li>
            <ProductListName>new products</ProductListName>
          </li>
        </ProductList>
        <div>
          <CardsList>
            {products?.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </CardsList>
        </div>
      </div>
    </ProductSection>
  );
};
const ProductSection = styled.section`
  padding: 50px 0 80px 0;
`;
const ProductInfo = styled.div`
  text-align: center;
`;
const CardsList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  padding: 15px;
`;
const Line = styled.span`
  display: block;
  width: 60px;
  height: 2px;
  background-color: ${colors.primary};
  margin: 0 auto 15px auto;
`;
const ProductTitle = styled(Typography)`
  margin-bottom: 14px !important;
`;
const ProductText = styled(Typography)`
  margin-bottom: 50px !important;
  color: ${colors.grey} !important;
`;
const ProductList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 33px;
  margin-bottom: 43px;
`;
const ProductListName = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  text-transform: capitalize;
  color: ${colors.primary};
  :visited {
    text-decoration-line: underline;
  }
`;
