import React from "react";

const SVG = ({
  style = {},
  fill = "currentColor",
  width = "100%",
  className = "",
  viewBox = "0 0 32 32",
}) => (
  <svg
    width={width}
    style={style}
    hieght={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      fill={fill}
      d="M0 0v32h32v-32h-32zM17 18.25v6.75h-2v-6.75l-5.469-10.25h2.269l4.2 7.875 4.2-7.875h2.269l-5.469 10.25z"
    />
  </svg>
);

export default SVG;
