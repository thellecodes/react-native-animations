import { createText, createBox } from "@shopify/restyle";

const theme = {
  colors: {
    white: "#fff",
    text: "#0D092370",
    button: "#0C0D34",
    primary: "#0D0923",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: "Rubik-Medium",
      color: "primary",
    },
    desc: {
      fontSize: 16,
      lineHeight: 25,
      fontFamily: "Rubik-Medium",
      color: "text",
    },
  },
  breakpoints: {},
};

export type Theme = typeof theme;
export const Text = createText<Theme>();
export const Box = createBox<Theme>();
export default theme;
