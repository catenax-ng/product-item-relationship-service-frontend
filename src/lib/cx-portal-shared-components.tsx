import { css, Global } from "@emotion/react";

export const Styles = css`
  @font-face {
    font-family: "LibreFranklin-SemiBold";
    font-display: block;
    src: url("https://portal.dev.demo.catena-x.net/assets/fonts/LibreFranklin-VariableFont_wght.ttf") format("truetype");
    font-weight: 600;
  }
  @font-face {
    font-family: "LibreFranklin-Medium";
    font-display: block;
    src: url("https://portal.dev.demo.catena-x.net/assets/fonts/LibreFranklin-VariableFont_wght.ttf") format("truetype");
    font-weight: 500;
  }
  @font-face {
    font-family: "LibreFranklin";
    font-display: block;
    src: url("https://portal.dev.demo.catena-x.net/assets/fonts/LibreFranklin-VariableFont_wght.ttf") format("truetype");
    font-weight: 400;
  }
  @font-face {
    font-family: "LibreFranklin-Light";
    font-display: block;
    src: url("https://portal.dev.demo.catena-x.net/assets/fonts/LibreFranklin-VariableFont_wght.ttf") format("truetype");
    font-weight: 300;
  }

  body {
    margin: 0;
    font-family: "LibreFranklin", "Libre Franklin", "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    color: black;
    font-weight: 300;
  }
`;

export const FontStyles = () => <Global styles={Styles} />;
