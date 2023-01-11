import React from "react";
import beauty from "../../assets/imgs/beauty.svg";
import shine from "../../assets/imgs/shine.svg";
import get from "../../assets/imgs/get.svg";
import defines from "../../assets/imgs/defines.svg";
import cosmetic from "../../assets/imgs/cosmetics.svg";
import styled from "styled-components";

export const Partners = () => {
  return (
    <section>
      <div className="container">
        <PartnerList>
          <li>
            <img src={beauty} alt="" />
          </li>
          <li>
            <img src={shine} alt="" />
          </li>
          <li>
            <img src={get} alt="" />
          </li>
          <li>
            <img src={defines} alt="" />
          </li>
          <li>
            <img src={cosmetic} alt="" />
          </li>
          <li>
            <img src={shine} alt="" />
          </li>
        </PartnerList>
      </div>
    </section>
  );
};
const PartnerList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 35px 0;
`;
