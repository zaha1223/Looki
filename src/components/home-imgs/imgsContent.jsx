import React from "react";
import discount from "../../assets/imgs/discount1.png";
import lipistik from "../../assets/imgs/lipistik2.png";
import lail from "../../assets/imgs/lail3.png";
import styled from "styled-components";

export const ImgsContent = () => {
  return (
    <div>
      <div className="container">
        <ImgsWrap>
          <ImgsList>
            <ImgsItem>
              <img src={discount} alt="" />
            </ImgsItem>
            <ImgsItem>
              <img src={lipistik} alt="" />
            </ImgsItem>
            <ImgsItem>
              <img src={lail} alt="" />
            </ImgsItem>
          </ImgsList>
        </ImgsWrap>
      </div>
    </div>
  );
};
const ImgsWrap = styled.div`
  padding: 0 16px 30px 16px;
`;
const ImgsList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
`;
const ImgsItem = styled.li`
  overflow: hidden;
  img {
    transition: all 0.3s ease;
  }
  :hover {
    img {
      transform: scale(1.2);
    }
  }
`;
