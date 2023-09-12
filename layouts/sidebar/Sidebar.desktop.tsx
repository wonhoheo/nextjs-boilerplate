import Image from "next/image";

import { sideBarContainer, sideBarHeader, sideBarRoot } from "layouts/sidebar/SideBar.css";
import SidebarContent from "layouts/sidebar/Sidebar.content";
import { SIDEBAR_DATA } from "constants/sidebar";

const SidebarDesktop = () => {
  return (
    <div className={sideBarRoot}>
      <div className={sideBarContainer}>
        <div className={sideBarHeader}>
          <Image src={"/images/logo.png"} alt={"logo"} width="110" height="30" />
        </div>
        <SidebarContent data={SIDEBAR_DATA} />
      </div>
    </div>
  );
};

export default SidebarDesktop;
