import React from "react";
import styled from "styled-components";
import img1 from "../../assets/imgs/footerB.png";
import { colors } from "../../config/mui-config";
export const BottomFooter = () => {
  return (
    <BootomFooter>
      <div className="container">
        <BottomContent>
          <Text>
            Copyright © <span>HasThemes</span>. All Rights Reserved
          </Text>
          <img src={img1} alt="" />
        </BottomContent>
      </div>
    </BootomFooter>
  );
};
const BootomFooter = styled.div`
  padding: 15px 0;
  background-color: ${colors.secondary};
`;
const BottomContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Text = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: ${colors.white};
  span {
    color: ${colors.primary};
  }
`;
