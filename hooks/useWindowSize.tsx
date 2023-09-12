import { useSetAtom } from "jotai";

import { windowSizeAtom } from "stores/global";
import { useEffect } from "react";

const useWindowSize = () => {
  const setWindowSizeAtom = useSetAtom(windowSizeAtom);

  useEffect(() => {
    const setWindowSize = () => {
      setWindowSizeAtom({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    setWindowSize();

    window.addEventListener("resize", setWindowSize);
    return () => {
      window.removeEventListener("resize", setWindowSize);
    };
  }, []);
};

export default useWindowSize;
