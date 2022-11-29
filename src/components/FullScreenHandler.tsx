import { Box } from "@mui/material";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export interface FullScreenHandle {
  active: boolean;
  enter: () => void;
  exit: () => void;
  node: React.MutableRefObject<HTMLDivElement | null>;
}
export interface FullScreenProps {
  handle: FullScreenHandle;
  children: React.ReactNode;
  onChange?: (state: boolean, handle: FullScreenHandle) => void;
  className?: string;
}
const stylesFullScreen: React.CSSProperties = {
  position: "fixed",
  zIndex: 1000,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  height: "100%",
  backgroundColor: "white",
  backgroundImage: `-webkit-repeating-radial-gradient(top center,
      rgba(0, 0, 0, 0.2), 
      rgba(0, 0, 0, 0.2) 1px, 
      transparent 0,
      transparent 100%)`,
  backgroundSize: "20px 20px",
};

export const useFullScreenHandle = () => {
  const [active, setActive] = useState(false);

  const node = useRef(null);

  const enter = useCallback(() => {
    setActive(true);
  }, []);

  const exit = useCallback(() => {
    setActive(false);
  }, []);

  return useMemo(() => {
    return {
      active: active,
      enter: enter,
      exit: exit,
      node: node,
    };
  }, [active, enter, exit]);
};

export const FullScreen = (el: FullScreenProps) => {
  const handle = el.handle;
  const onChange = el.onChange;
  const children = el.children;
  const className = el.className;
  const classNames = [];

  if (className) {
    classNames.push(className);
  }

  useEffect(function () {
    if (onChange) {
      onChange(handle.active, handle);
    }
  });

  return (
    <Box className={classNames.join(" ")} ref={handle.node} style={handle.active ? stylesFullScreen : undefined}>
      {children}
    </Box>
  );
};
