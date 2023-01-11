import React from "react";
import insta from "../../assets/icons/instablack.svg";
import youtube from "../../assets/icons/youtubeBlack.svg";
import twit from "../../assets/icons/twitterBlack.svg";
import facebook from "../../assets/icons/facebookBlack.svg";
import Logo from "../../assets/imgs/logo.svg";
import styled from "styled-components";
import { colors } from "../../config/mui-config";
import { Typography } from "@mui/material";
import { BottomFooter } from "../footerBottom/bottomFooter";
export const Footer = () => {
  return (
    <>
      <FooterWrap>
        <div className="container">
          <FooterContentWrapper>
            <FooterContent>
              <a href="/">
                <FooterLogo src={Logo} alt="" />
              </a>
              <FirstText variant="body1">
                We are a team of professional designers and developers that
                create high quality wordpress plugins, Html, React Template.
              </FirstText>
              <Socials>
                <li>
                  <img src={insta} alt="" />
                </li>
                <li>
                  <img src={youtube} alt="" />
                </li>
                <li>
                  <img src={twit} alt="" />
                </li>
                <li>
                  <img src={facebook} alt="" />
                </li>
              </Socials>
            </FooterContent>
            <LinksListWrap>
              <ul>
                <LinksTitle variant="h4">Information</LinksTitle>
                <LinksLine></LinksLine>
                <li>
                  <LinksText variant="body1">About us</LinksText>
                </li>
                <li>
                  <LinksText variant="body1">payment</LinksText>
                </li>
                <li>
                  <LinksText variant="body1">Contact us</LinksText>
                </li>
                <li>
                  <LinksText variant="body1">Stores</LinksText>
                </li>
              </ul>
              <ul>
                <LinksTitle variant="h4">social Links</LinksTitle>
                <LinksLine></LinksLine>
                <li>
                  <LinksText variant="body1">New products</LinksText>
                </li>
                <li>
                  <LinksText variant="body1">Best sales</LinksText>
                </li>
                <li>
                  <LinksText variant="body1">Login</LinksText>
                </li>
                <li>
                  <LinksText variant="body1">My account</LinksText>
                </li>
              </ul>
            </LinksListWrap>
            <LetterWrapper>
              <Lettertitle variant="h4">Newsletter</Lettertitle>
              <LinksLine></LinksLine>
              <LetterText variant="body1">
                Subcribe to the TheFace mailing list to receive update on mnew
                arrivals, special offers and other discount information.
              </LetterText>
              <LetterForm>
                <LetterInpt type="text" placeholder="Your email address" />
                <LetterBtn>Sign up</LetterBtn>
              </LetterForm>
            </LetterWrapper>
          </FooterContentWrapper>
        </div>
      </FooterWrap>
      <BottomFooter />
    </>
  );
};
const FooterContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const FooterWrap = styled.footer`
  background-color: #efefef;
  padding: 80px 0 95px 0;
`;
const FooterLogo = styled.img`
  margin-bottom: 24px;
`;
const FirstText = styled(Typography)`
  color: #565656;
  margin-bottom: 29px !important;
`;
const FooterContent = styled.div`
  max-width: 400px;
  margin-right: 40px;
`;
const Socials = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
  li {
    padding: 5px 0 0 5px;
    width: 40px;
    border-radius: 20px;
    background-color: ${colors.white};
    :hover {
      background-color: ${colors.primary};
    }
  }
`;
////////////////////////////////////////////////////======================================
const LinksListWrap = styled.div`
  display: flex;
  margin-right: 24px;
  gap: 24px;
  ul {
    max-width: 196px;
  }
`;
const LinksTitle = styled(Typography)`
  margin-bottom: 18px !important;
  text-transform: capitalize;
`;
const LinksLine = styled.span`
  display: block;
  width: 60px;
  height: 2px;
  background-color: ${colors.primary};
  margin-bottom: 24px;
`;
const LinksText = styled(Typography)`
  text-transform: capitalize;
`;
/////////////////////////////////
const LetterWrapper = styled.div`
  max-width: 416px;
`;
const Lettertitle = styled(Typography)`
  margin-bottom: 18px !important;
`;
const LetterText = styled(Typography)`
  margin-bottom: 19px !important;
`;
const LetterForm = styled.form`
  position: relative;
`;
const LetterInpt = styled.input`
  background: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 30px;
  padding: 16px 120px 13px 11px;
  ::placeholder {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #565656;
  }
`;
const LetterBtn = styled.button`
  border: none;
  padding: 0 17px;
  background: ${colors.primary};
  border-radius: 0px 30px 30px 0px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 47px;
  text-transform: capitalize;
  color: ${colors.white};
  position: absolute;
  left: 220px;
  :hover {
    background-color: ${colors.secondary};
  }
`;
