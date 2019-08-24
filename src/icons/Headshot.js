import React from "react";

const SvgHeadshot = props => (
  <svg viewBox="0 0 399.2 399.2" {...props}>
    <defs>
      <linearGradient
        id="Headshot_svg__a"
        x1={26.36}
        y1={372.84}
        x2={372.84}
        y2={26.36}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.25} />
        <stop offset={0.9} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
    </defs>
    <g data-name="Layer 2">
      <path
        d="M372.84 26.36a90 90 0 00-127.28 0l-219.2 219.2a90 90 0 00127.28 127.28l219.2-219.2a90 90 0 000-127.28z"
        style={{
          mixBlendMode: "luminosity"
        }}
        fill="url(#Headshot_svg__a)"
        data-name="Layer 1"
      />
    </g>
  </svg>
);

export default SvgHeadshot;
