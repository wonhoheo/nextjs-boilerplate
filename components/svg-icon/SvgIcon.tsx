import { type SVGProps } from "react";
import href from "./icon.svg";
export { href };

export default function SvgIcon({ icon, ...props }: SVGProps<SVGSVGElement> & { icon: IconName }) {
  return (
    <svg {...props}>
      <use href={`${href.src}#${icon}`} />
    </svg>
  );
}

export const iconNames = ["chevron-right", "dashboard", "sidebar-sub", "x-mark"] as const;
export type IconName = (typeof iconNames)[number];
