import { createTheme } from "@mui/material";

export const colors = {
  primary: "#5A5AC9",
  secondary: "#111111",
  grey: "#565656",
  white: "#ffffff",
};
export const breakpoints = {
  xs: 0,
  sm: 375,
  md: 749,
  lg: 1207,
};
export const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "Raleway"].join(""),
    allVariants: {
      fontStyle: "normal",
    },
    h2: {
      fontFamily: "Raleway",
      fontWeight: 400,
      fontSize: "50px",
      lineHeight: "62px",
      color: colors.secondary,
    },
    h3: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "30px",
      lineHeight: "38px",
      color: colors.secondary,
    },
    h4: {
      fontFamily: "Raleway",
      fontWeight: 600,
      fontSize: "18px",
      lineHeight: "22px",
    },
    body1: {
      fontFamily: "Poppins",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "24px",
    },
  },
  breakpoints: {
    values: {
      ...breakpoints,
    },
  },
  palette: {
    mode: "light",
  },
});
