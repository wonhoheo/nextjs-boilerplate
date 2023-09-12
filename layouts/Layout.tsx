import type { ReactNode } from "react";

import { contentContainer, layoutContainer } from "layouts/Layout.css";
import SideBar from "layouts/sidebar/SideBar";
interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className={layoutContainer}>
      <SideBar />
      <div className={contentContainer}>{children}</div>
    </div>
  );
};

export default Layout;
