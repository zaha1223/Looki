import React from "react";
import styled from "styled-components";
import { colors } from "../../config/mui-config";

export const PagesModal = () => {
  return (
    <PageModal>
      <PageItem>
        <p>About page</p>
      </PageItem>
      <PageItem>
        <p>Cart Page</p>
      </PageItem>
      <PageItem>
        <p>Checout page</p>
      </PageItem>
      <PageItem>
        <p>Compare page</p>
      </PageItem>
      <PageItem>
        <p>Login & Register Page</p>
      </PageItem>
      <PageItem>
        <p>Account Page</p>
      </PageItem>
      <PageItem>
        <p>Wishlist Page</p>
      </PageItem>
    </PageModal>
  );
};
const PageModal = styled.ul`
  position: absolute;
  background-color: ${colors.white};
  box-shadow: 0 0 3.76px 0.24px rgb(0 0 0 / 15%);
  z-index: 5;
`;
const PageItem = styled.li`
  p {
    font-weight: 400;
    text-align: left;
    text-transform: capitalize;
    padding: 0 20px;
    color: #565656;
    font-size: 14px;
    line-height: 40px;
    &:hover {
      margin-left: 4px;
    }
    transition: margin 0.3s;
  }
  border-bottom: 1px solid #eee;
`;
