import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { colors } from "../../config/mui-config";
import blog1 from "../../assets/imgs/blog1.png";
import blog2 from "../../assets/imgs/blog2.png";
import blog3 from "../../assets/imgs/blog3.png";
import blog4 from "../../assets/imgs/blog4.png";
import { BlogCard } from "../blogCard/blogCard";
import { nanoid } from "@reduxjs/toolkit";
const blogCards = [
  {
    id: nanoid(),
    name: "This is first Post For Blog",
    img: `${blog1}`,
  },
  {
    id: nanoid(),
    name: "This is Secound Post For Blog",
    img: `${blog2}`,
  },
  {
    id: nanoid(),
    name: "This is third Post For Blog",
    img: `${blog3}`,
  },
  {
    id: nanoid(),
    name: "This is fourth Post For Blog",
    img: `${blog4}`,
  },
];
export const Blogs = () => {
  return (
    <BlogsSection>
      <div className="container">
        <BlogContent>
          <BlogTitle variant="h3">from our Latest Blogs</BlogTitle>
          <BlogLine></BlogLine>
          <Typography variant="body1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </Typography>
        </BlogContent>
        <div>
          <BlogList>
            {blogCards.map((el) => (
              <BlogCard key={el.id} {...el} />
            ))}
          </BlogList>
        </div>
      </div>
    </BlogsSection>
  );
};

const BlogContent = styled.div`
  margin-bottom: 50px;
  text-align: center;
`;
const BlogLine = styled.span`
  display: block;
  width: 60px;
  height: 2px;
  background-color: ${colors.primary};
  margin: 0 auto 15px auto;
`;
const BlogTitle = styled(Typography)`
  margin-bottom: 15px !important;
  text-transform: capitalize;
`;
const BlogsSection = styled.section`
  padding-bottom: 65px;
`;

const BlogList = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
  padding: 0 15px;
`;
