import { IconName } from "components/svg-icon/SvgIcon";

type Sidebar = {
  text: string;
  id: string;
  icon: IconName;
};

export type SidebarData = Sidebar & {
  children?: { text: string; id: string }[];
};
