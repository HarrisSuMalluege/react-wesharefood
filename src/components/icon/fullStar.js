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
      d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"
    />
  </svg>
);

export default SVG;
