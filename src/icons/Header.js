import React from "react";

const SvgHeader = props => (
  <svg width="100vw" viewBox="0 0 1366.22 718.91" {...props} overflow="hidden">
    <defs>
      <linearGradient
        id="Header_svg__a"
        x1={505.74}
        y1={776.82}
        x2={977.68}
        y2={-336.87}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f5da55" />
        <stop offset={1} stopColor="#ffec65" />
      </linearGradient>
    </defs>
    <g data-name="Layer 2">
      <path
        d="M.22 0h1366v716c-138 31-197-195-267-231-70.94-36.48-139.27 111.37-253 100-110-11-142.5-123.5-189.5-133.5-98.52-21-175 66-251-10-68-68-50.9-179.55-135.5-198.5-125-28-136 266-211 216-28.69-19.13-6.51-265.94-24-269.28C5.22 184 12.09 304 .22 298c0 0-.5-298.5 0-298z"
        fill="url(#Header_svg__a)"
        data-name="Layer 1"
      />
    </g>
  </svg>
);

export default SvgHeader;
