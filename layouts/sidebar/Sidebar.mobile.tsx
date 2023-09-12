import Image from "next/image";
import { useAtom } from "jotai";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";

import {
  sideBarContainer,
  sideBarHeader,
  sideBarOverlay,
  sideBarXmark,
  sideBarXmarkButton,
} from "layouts/sidebar/SideBar.css";
import SidebarContent from "layouts/sidebar/Sidebar.content";
import { SIDEBAR_DATA } from "constants/sidebar";
import SvgIcon from "components/svg-icon/SvgIcon";
import { isSidebarOpenAtom } from "stores/global";
import Portal from "components/Portal";

const SidebarMobile = () => {
  const [isOpen, setIsOpen] = useAtom(isSidebarOpenAtom);
  const sideBarRef = useRef<HTMLDivElement>(null);

  const handleSideBarVisible = (visible: boolean) => () => {
    setIsOpen(visible);
  };

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (!sideBarRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    window.addEventListener("click", onClickOutside);
  }, [setIsOpen]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <Portal>
            <motion.div
              ref={sideBarRef}
              initial={{ transform: "translateX(-260px)" }}
              animate={{ transform: "none" }}
              transition={{ ease: "easeInOut", duration: "0.3" }}
              exit={{ transform: "translateX(-260px)" }}
              className={sideBarContainer}
            >
              <div className={sideBarHeader}>
                <Image src={"/images/logo.png"} alt={"logo"} width="110" height="30" />
                <a className={sideBarXmarkButton} onClick={handleSideBarVisible(false)}>
                  <SvgIcon icon={"x-mark"} className={sideBarXmark} />
                </a>
              </div>
              <SidebarContent data={SIDEBAR_DATA} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: "0.3" }}
              exit={{ opacity: 0 }}
              className={sideBarOverlay}
            ></motion.div>
          </Portal>
        )}
      </AnimatePresence>
    </>
  );
};

export default SidebarMobile;
