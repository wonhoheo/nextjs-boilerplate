import { useAtomValue } from "jotai";

import { isMobileAtom } from "stores/global";
import SidebarDesktop from "layouts/sidebar/Sidebar.desktop";
import SidebarMobile from "layouts/sidebar/Sidebar.mobile";
const SideBar = () => {
  const isMobile = useAtomValue(isMobileAtom);
  return !isMobile ? <SidebarDesktop /> : <SidebarMobile />;
};

export default SideBar;
