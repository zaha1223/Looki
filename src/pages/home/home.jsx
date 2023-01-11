import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import img1 from "../../assets/imgs/hero1bg.webp";
import img2 from "../../assets/imgs/hero2bg.webp";
import img3 from "../../assets/imgs/hero3.webp";
import prew from "../../assets/icons/prew.svg";
import next from "../../assets/icons/next.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { colors } from "../../config/mui-config";
import { Typography, useMediaQuery } from "@mui/material";
import { Fade, Zoom } from "react-reveal";
import {
  Services,
  ImgsContent,
  Products,
  ImgsProduct,
  NewProducts,
  Blogs,
  Partners,
} from "../../components";
export const Home = () => {
  const md = useMediaQuery("(max-width:687px)");
  const [isHover, setIshover] = React.useState(false);
  const [isnext, setNext] = React.useState(false);
  const handleMouseEnter = () => {
    setIshover(true);
  };
  const handleMouseLeave = () => {
    setIshover(false);
  };
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <NextBtn
        onMouseEnter={() => setNext(true)}
        onMouseLeave={() => setNext(false)}
        className={className}
        style={{
          ...style,
          display: "block",
          zIndex: "1",
          right: "110px",
          maxwidth: "9px",
          height: "14px",
          padding: "16px 15px",
          background: `${isnext ? colors.primary : "#80808072"}`,
          borderRadius: "25px",
          backgroundImage: `url(${next})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        onClick={onClick}
      ></NextBtn>
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <PrewBtn
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={className}
        style={{
          ...style,
          display: "block",
          maxwidth: "9px",
          height: "14px",
          zIndex: "1",
          padding: "16px 15px",
          left: "110px",
          background: `${isHover ? colors.primary : "#80808072"}`,
          borderRadius: "25px",
          backgroundImage: `url(${prew})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        onClick={onClick}
      ></PrewBtn>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <HeroSection>
        <SliderWrap>
          <Slider {...settings}>
            <ImgWrap>
              <HeroContent>
                <Fade left>
                  <HeroSubtitle>Face Makeup Brush</HeroSubtitle>
                </Fade>
                <Fade right>
                  <HeroTitle md={md} variant="h2">
                    Skincare Brush <Fade bottom>Set Sale 30% Off</Fade>
                  </HeroTitle>
                </Fade>
                <Fade bottom>
                  <HeroBtn>SHop NOW</HeroBtn>
                </Fade>
              </HeroContent>
              <Zoom right>
                <img src={img1} alt="" />
              </Zoom>
            </ImgWrap>
            <ImgWrap>
              <HeroContent>
                <Fade left>
                  <HeroSubtitle>Morneva Shampoo</HeroSubtitle>
                </Fade>
                <Fade right>
                  <HeroTitle md={md} variant="h2">
                    Scalpcare Shampoo<Fade bottom>Sale 40% Off</Fade>
                  </HeroTitle>
                </Fade>
                <Fade bottom>
                  <HeroBtn>SHop NOW</HeroBtn>
                </Fade>
              </HeroContent>
              <Zoom right>
                <img src={img2} alt="" />
              </Zoom>
            </ImgWrap>
            <ImgWrap>
              <HeroContent>
                <Fade left>
                  <HeroSubtitle>Runway Lip Palette red</HeroSubtitle>
                </Fade>
                <Fade right>
                  <HeroTitle md={md} variant="h2">
                    Lipscare Lipsticks <Fade bottom>Sale 60% Off</Fade>
                  </HeroTitle>
                </Fade>
                <Fade bottom>
                  <HeroBtn>SHop NOW</HeroBtn>
                </Fade>
              </HeroContent>
              <Zoom right>
                <img src={img3} alt="" />
              </Zoom>
            </ImgWrap>
          </Slider>
        </SliderWrap>
      </HeroSection>
      <Services />
      <ImgsContent />
      <Products />
      <ImgsProduct />
      <NewProducts />
      <Blogs />
      <Partners />
    </>
  );
};

const HeroSection = styled.section`
  padding-bottom: 128px;
`;

const PrewBtn = styled.button`
  ::before {
    display: none;
  }
`;
const NextBtn = styled.button`
  ::before {
    display: none;
  }
`;
const SliderWrap = styled.div`
  max-width: 100%;
`;
const ImgWrap = styled.div`
  position: relative;
  img {
    width: 100%;
    height: 529px;
  }
`;
const HeroContent = styled.div`
  position: absolute;
  z-index: 3;
  top: 100px;
  left: 210px;
  max-width: 435px;
`;
const HeroSubtitle = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 34px;
  text-transform: uppercase;
  color: ${colors.secondary};
  margin-bottom: 14px;
`;
const HeroTitle = styled(Typography)`
  margin-bottom: 45px !important;
  font-size: ${(props) => (!props.md ? "50px" : "30px")} !important;
`;
const HeroBtn = styled.button`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  text-transform: uppercase;
  border: none;
  background-color: inherit;
  padding: 16px 31px;
  color: ${colors.secondary};
  border: 1px solid ${colors.secondary};
  transition: background 0.4s ease;
  :hover {
    background-color: ${colors.primary};
    color: ${colors.white};
  }
`;
