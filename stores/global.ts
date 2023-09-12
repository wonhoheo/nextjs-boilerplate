import { atom } from "jotai";
import { BREAK_POINTS, BREAK_POINTS_WIDTH } from "constants/ui";

type WindowSize = {
  width: number;
  height: number;
};

export const windowSizeAtom = atom<WindowSize>({
  width: 0,
  height: 0,
});

export const breakPointAtom = atom(get => {
  const width = get(windowSizeAtom).width;

  if (width >= BREAK_POINTS_WIDTH.XL) return BREAK_POINTS.XL;
  if (width >= BREAK_POINTS_WIDTH.LG) return BREAK_POINTS.LG;
  if (width >= BREAK_POINTS_WIDTH.MD) return BREAK_POINTS.MD;
  if (width >= BREAK_POINTS_WIDTH.SM) return BREAK_POINTS.SM;

  return BREAK_POINTS.XS;
});

export const isMobileAtom = atom(get => {
  const breakPoint = get(breakPointAtom);

  return [BREAK_POINTS.XL, BREAK_POINTS.LG].indexOf(breakPoint) === -1;
});

export const isSidebarOpenAtom = atom(true);
