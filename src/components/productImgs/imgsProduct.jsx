import React from "react";
import img1 from "../../assets/imgs/upTo.png";
import img2 from "../../assets/imgs/newCollect.png";
import img3 from "../../assets/imgs/mackup.png";
import styled from "styled-components";
export const ImgsProduct = () => {
  return (
    <ImgsSection>
      <div className="container">
        <ImgsList>
          <ImgItem>
            <img src={img1} alt="" />
          </ImgItem>
          <ImgItem>
            <img src={img2} alt="" />
          </ImgItem>
          <ImgItem>
            <img src={img3} alt="" />
          </ImgItem>
        </ImgsList>
      </div>
    </ImgsSection>
  );
};
const ImgsSection = styled.section`
  padding-bottom: 50px;
`;
const ImgsList = styled.ul`
  display: flex;
  align-items: center;
  gap: 25px;
  flex-wrap: wrap;
  padding: 0 12px 30px 12px;
`;
const ImgItem = styled.li`
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
