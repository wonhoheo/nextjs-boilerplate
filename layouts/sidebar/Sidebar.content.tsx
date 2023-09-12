import { motion, AnimatePresence } from "framer-motion";

import type { SidebarData } from "types/sidebar";
import SvgIcon from "components/svg-icon/SvgIcon";
import {
  sideBarItemChildrenContainer,
  sideBarItemChildrenIcon,
  sideBarItemContainer,
  sideBarItemIcon,
  sideBarItemIconButton,
  sideBarItemParent,
  sideBarItemTextContainer,
} from "layouts/sidebar/SideBar.css";
import { Fragment, useState } from "react";

interface Props {
  data: SidebarData[];
}

const SidebarContent = ({ data }: Props) => {
  const [expandedIds, setExpandedIds] = useState<string>("");

  const handleExpanded = (id: string) => () => {
    setExpandedIds(prev => {
      if (prev === id) {
        return "";
      } else {
        return id;
      }
    });
  };

  const isExpanded = (id: string) => {
    return expandedIds === id;
  };

  return (
    <ul className={sideBarItemContainer}>
      {data.map(v => (
        <Fragment key={v.id}>
          <li className={`${sideBarItemParent} ${isExpanded(v.id) ? "selected" : ""}`} onClick={handleExpanded(v.id)}>
            <div className={sideBarItemTextContainer}>
              {v.icon && <SvgIcon className={`${sideBarItemIcon} prefix`} icon={v.icon} />}
              <span>{v.text}</span>
            </div>
            {v.children && (
              <a className={sideBarItemIconButton}>
                <SvgIcon
                  className={`${sideBarItemIcon} ${expandedIds.indexOf(v.id) !== -1 ? "selected" : ""}`}
                  icon={"chevron-right"}
                ></SvgIcon>
              </a>
            )}
          </li>
          <AnimatePresence>
            {v.children && isExpanded(v.id) && (
              <motion.ul
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                transition={{ ease: "easeInOut", duration: "0.3" }}
                exit={{ height: 0 }}
                className={sideBarItemChildrenContainer}
              >
                {v.children.map(val => (
                  <motion.li key={val.id} className={`${sideBarItemParent}`}>
                    <div className={sideBarItemTextContainer}>
                      <SvgIcon className={`${sideBarItemChildrenIcon} prefix`} icon={"sidebar-sub"} />
                      <span>{val.text}</span>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </Fragment>
      ))}
    </ul>
  );
};

export default SidebarContent;
