import { style } from "@vanilla-extract/css";

export const layoutContainer = style({
  display: "flex",
  height: "100%",
});

export const contentContainer = style({
  flexGrow: 1,
  minWidth: 0,
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
  WebkitBoxFlex: "1",
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
});
