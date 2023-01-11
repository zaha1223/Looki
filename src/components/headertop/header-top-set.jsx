import { Link, Stack, useMediaQuery } from "@mui/material";
import React from "react";
import facebook from "../../assets/icons/facebook.svg";
import twit from "../../assets/icons/twitter.svg";
import yout from "../../assets/icons/youtube.svg";
import insta from "../../assets/icons/instagram.svg";
import phone from "../../assets/icons/phone.svg";
import styled from "styled-components";
import { colors } from "../../config/mui-config";
export const HeaderTopSet = () => {
  const md = useMediaQuery("(max-width: 760px)");
  const [isOpen, setIsopen] = React.useState(false);
  const [openPrice, setOpenPrice] = React.useState(false);
  return (
    <Stack sx={{ backgroundColor: "#111111", padding: "5px 0" }}>
      <div className="container">
        <HeaderTop md={md}>
          <Stack direction="row" gap="25px" alignItems="center">
            <Link>
              <img src={facebook} alt="facebook-page" />
            </Link>
            <Link>
              <img src={twit} alt="facebook-page" />
            </Link>
            <Link>
              <img src={yout} alt="facebook-page" />
            </Link>
            <Link>
              <img src={insta} alt="facebook-page" />
            </Link>
            <PhoneLink href="tel:(+123)4567890">(+123)4567890</PhoneLink>
          </Stack>
          {!md ? (
            <Stack direction="row" gap="35px">
              <NavLink onClick={() => setIsopen(!isOpen)}>
                Setting
                {isOpen ? (
                  <SetDrop>
                    <SetDropItem>My account</SetDropItem>
                    <SetDropItem>Checout</SetDropItem>
                    <SetDropItem>Sign out</SetDropItem>
                  </SetDrop>
                ) : (
                  ""
                )}
              </NavLink>
              <NavLink onClick={() => setOpenPrice(!openPrice)}>
                USD $
                {openPrice ? (
                  <PriceDrop>
                    <PriceDropItem>USD $</PriceDropItem>
                    <PriceDropItem>EUR </PriceDropItem>
                  </PriceDrop>
                ) : (
                  ""
                )}
              </NavLink>
              <NavLink>English</NavLink>
            </Stack>
          ) : (
            ""
          )}
        </HeaderTop>
      </div>
    </Stack>
  );
};
const PriceDrop = styled.ul`
  position: absolute;
  right: 15px;
  width: 200px;
  background-color: ${colors.white};
  z-index: 1;
`;
const PriceDropItem = styled.li`
  padding: 10px;
  line-height: 25px;
  font-size: 13px;
  color: ${colors.grey};
  background-color: ${colors.white};
  border-bottom: 1px solid #ebebeb;
`;

const PhoneLink = styled.a`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: #ffffff;
  margin-left: 37px;
  background-image: url(${phone});
  background-repeat: no-repeat;
  background-position-y: center;
  padding: 0 0 7px 35px;
`;
const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (!props.md ? "space-between" : "center")};
`;

const SetDrop = styled.ul`
  position: absolute;
  right: 15px;
  width: 200px;
  background-color: ${colors.white};
`;
const SetDropItem = styled.li`
  padding: 10px;
  line-height: 25px;
  font-size: 13px;
  color: ${colors.grey};
  background-color: ${colors.white};
  border-bottom: 1px solid #ebebeb;
`;
const NavLink = styled.a`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: #ffffff;
  position: relative;
  cursor: pointer;
  &:hover {
    color: ${colors.primary};
  }
`;
