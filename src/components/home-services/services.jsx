import { Typography, useMediaQuery } from "@mui/material";
import React from "react";
import styled from "styled-components";
import ship from "../../assets/imgs/ship.svg";
import free from "../../assets/imgs/returns.svg";
import secure from "../../assets/imgs/secure.svg";
import sup from "../../assets/imgs/support.svg";
import { colors } from "../../config/mui-config";

export const Services = () => {
  const md = useMediaQuery("(max-width:420px)");
  return (
    <ServicesSection>
      <div className="container">
        <ServiceWrap>
          <ServicesList md={md}>
            <ServicesItem>
              <img src={ship} alt="" />
              <ItemInfo>
                <ItemTitle variant="h4">Free Shipping</ItemTitle>
                <ItemText variant="body1">On all orders over $75.00</ItemText>
              </ItemInfo>
            </ServicesItem>
            <ServicesItem>
              <img src={free} alt="" />
              <ItemInfo>
                <ItemTitle variant="h4">Free Returns</ItemTitle>
                <ItemText variant="body1">
                  Returns are free within 9 days
                </ItemText>
              </ItemInfo>
            </ServicesItem>
            <ServicesItem>
              <img src={secure} alt="" />
              <ItemInfo>
                <ItemTitle variant="h4">100% Payment Secure</ItemTitle>
                <ItemText variant="body1">
                  Your payment are safe with us.
                </ItemText>
              </ItemInfo>
            </ServicesItem>
            <ServicesItem>
              <img src={sup} alt="" />
              <ItemInfo>
                <ItemTitle variant="h4">Support 24/7</ItemTitle>
                <ItemText variant="body1">Contact us 24 hours a day</ItemText>
              </ItemInfo>
            </ServicesItem>
          </ServicesList>
        </ServiceWrap>
      </div>
    </ServicesSection>
  );
};
const ServicesSection = styled.section`
  padding: 80px 0;
`;
const ServiceWrap = styled.div`
  background-color: ${colors.primary};
  padding: 18px 45px;
`;
const ServicesList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 16px 12px;
  gap: ${(props) => (!props.md ? "40px" : "24px")};
`;
const ServicesItem = styled.li`
  display: flex;
  align-items: center;
`;
const ItemInfo = styled.div`
  margin-left: 16px;
`;
const ItemTitle = styled(Typography)`
  font-weight: 700;
  color: ${colors.white} !important;
`;
const ItemText = styled(Typography)`
  color: ${colors.white} !important;
`;
