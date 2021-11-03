import React from "react";
import { ThemeProvider } from "styled-components";

const lightTheme = {
    colors: {
        background: "white",
        secondBackground: "#212121",
        border: "#606470",
        cardBack: "#606470",
        fontColor: "#222831",
        titleColors: '#86839C',
        fontSecond: "white",
        subtitleColors: "#D15757"
       },
      
}
const DarkTheme = {
    colors: {
        background: "#2d4059",
        secondBackground: "#1e549f",
        border: "#4d6de3",
        cardBack: "#c7eeff",
        fontColor: "white",
        fontSecond: "#93deff"
       },
       
       

}

const Theme = ({ children }) => (
  <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
);

export default Theme;
