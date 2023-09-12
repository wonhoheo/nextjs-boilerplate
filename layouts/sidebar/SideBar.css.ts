import { style } from "@vanilla-extract/css";

// 사이드바 컨테이너 css
export const sideBarRoot = style({
  width: 265,
  flex: "0 0 auto",
  overflowX: "hidden",
});
export const sideBarContainer = style({
  display: "flex",
  color: "rgba(208, 212, 241, 0.78)",
  overflowY: "auto",
  flexDirection: "column",
  height: "100%",
  zIndex: "1200",
  position: "fixed",
  top: 0,
  outline: 0,
  left: 0,
  backgroundColor: "rgb(47, 51, 73)",
  boxShadow: "rgba(15, 20, 34, 0.14) 0px 2px 6px 0px",
  borderRight: "0px solid",
  padding: "0 12px",
  width: "265px",
});

export const sideBarHeader = style({
  minHeight: 64,
  display: "flex",
  alignItems: "center",
  padding: "0 1rem",
  justifyContent: "space-between",
});

export const sideBarXmarkButton = style({
  width: "1.4rem",
  height: "1.4rem",
  cursor: "pointer",
});

export const sideBarXmark = style({
  width: "1.4rem",
  height: "1.4rem",
});

export const sideBarOverlay = style({
  position: "fixed",
  display: "flex",
  WebkitBoxAlign: "center",
  alignItems: "center",
  WebkitBoxPack: "center",
  justifyContent: "center",
  inset: "0px",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "rgba(37, 41, 60, 0.7)",
  zIndex: 1199,
});

// 사이드바 메뉴별 css

export const sideBarItemContainer = style({
  listStyle: "none",
  position: "relative",
});

export const sideBarItemParent = style({
  display: "flex",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  textAlign: "left",
  marginTop: "0.25rem",
  flexDirection: "row",
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  appearance: "none",
  flexGrow: 1,
  padding: "0.5rem 1rem",
  borderRadius: "6px",
  width: "100%",
  justifyContent: "space-between",

  selectors: {
    "&:hover": {
      backgroundColor: "rgba(208, 212, 241, 0.06)",
    },
    "&.selected": {
      backgroundColor: "rgba(208, 212, 241, 0.06)",
    },
  },
});

export const sideBarItemTextContainer = style({
  display: "flex",
  alignItems: "center",
});

export const sideBarItemIconButton = style({
  width: 22,
  height: 22,
});

export const sideBarItemIcon = style({
  width: 22,
  height: 22,
  transition: "transform 0.2s ease-in-out",
  selectors: {
    "&.prefix": {
      marginRight: "6px",
    },
    [`${sideBarItemIconButton} > &.selected`]: {
      transform: "rotate(90deg)",
    },
  },
});

export const sideBarItemChildrenContainer = style({
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
});

export const sideBarItemChildrenIcon = style({
  width: 10,
  height: 10,
  marginRight: "0.875rem",
  marginLeft: "0.375rem",
});
