import React from "react";

function Logo() {
  return (
    <div id="logo">
    <svg width="100" height="100" viewBox="-100 -100 200 200">
    <defs>
      <path id="text-arc" d="M 0, 50 A 50 50 0 1 1 1,50" />
    </defs>
  
    <text
      fill="#ffffff"
      fontFamily="Tahoma"
      fontSize="1.6em"
      fontWeight="bold"
    >
      <textPath href="#text-arc">
        Shivam Shivam Shivam
      </textPath>
    </text>
  </svg>
  </div>
  );
}

export default Logo;