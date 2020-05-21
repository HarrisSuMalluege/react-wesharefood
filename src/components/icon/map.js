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
      d="M21 6l-10-4-11 4v24l11-4 10 4 11-4v-24l-11 4zM12 4.554l8 3.2v19.692l-8-3.2v-19.692zM2 7.401l8-2.909v19.744l-8 2.909v-19.744zM30 24.599l-8 2.909v-19.744l8-2.909v19.744z"
    />
  </svg>
);

export default SVG;
