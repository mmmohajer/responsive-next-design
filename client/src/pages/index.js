import useDivWidth from "./hooks/useDivWidth";

const index = () => {
  const { containerRef, width } = useDivWidth();
  return <div ref={containerRef}>The container width is {width}</div>;
};

export default index;
