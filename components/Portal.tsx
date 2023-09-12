import { createPortal } from "react-dom";
import { ReactNode, useEffect, useRef, useState } from "react";

interface Props {
  children: ReactNode;
  selector?: string;
}
const Portal = ({ children, selector }: Props) => {
  const ref = useRef<Element | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>(selector || "#portal");
    setIsMounted(true);
  }, [selector]);
  return isMounted && ref.current && children ? createPortal(children, ref.current) : null;
};

export default Portal;
