import { useState, useEffect, useRef } from "react";

const useDivWidth = () => {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    if (containerRef?.current?.clientWidth) {
      setWidth(containerRef.current.clientWidth);
    }
  };

  useEffect(() => {
    if (containerRef?.current) {
      updateWidth();
      window.addEventListener("resize", updateWidth);
      return () => window.removeEventListener("resize", updateWidth);
    }
  }, []);

  return { containerRef, width };
};

export default useDivWidth;
