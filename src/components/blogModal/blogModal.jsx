import React from "react";
import styled from "styled-components";
import { colors } from "../../config/mui-config";

export const BlogModal = () => {
  return (
    <BlodList>
      <BlogItem>
        <p>Blog Grid</p>
      </BlogItem>
      <BlogItem>
        <p>Blog List</p>
      </BlogItem>
      <BlogItem>
        <p>Blog Single</p>
      </BlogItem>
    </BlodList>
  );
};
const BlodList = styled.ul`
  position: absolute;
  z-index: 5;
  box-shadow: 0 0 3.76px 0.24px rgb(0 0 0 / 15%);
  background: ${colors.white};
`;
const BlogItem = styled.li`
  padding: 0 20px;
  border-bottom: 1px solid #eee;
  p {
    font-weight: 400;
    text-align: left;
    text-transform: capitalize;
    padding: 0;
    color: ${colors.grey};
    font-size: 14px;
    line-height: 40px;
    &:hover {
      padding-left: 5px;
    }
    transition: padding 0.3s ease;
  }
`;
