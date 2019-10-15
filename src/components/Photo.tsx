import React, { SVGProps } from 'react';
import { IIblisReactUndrawProps } from '../iblis_react_undraw_props';
export const SvgPhoto = (props: IIblisReactUndrawProps & SVGProps<SVGSVGElement>) => (
  <svg
    data-name="Layer 1"
    viewBox="0 0 887.82 625.36"
    className={props.class}
    width="100%"
    height={props.height}
    {...props}
  >
    <defs>
      <linearGradient id="Photo_svg__a" x1={600} y1={754.02} x2={600} y2={145.98} gradientUnits="userSpaceOnUse">
        <stop offset={0} stopColor="gray" stopOpacity={0.25} />
        <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
        <stop offset={1} stopColor="gray" stopOpacity={0.1} />
      </linearGradient>
      <linearGradient id="Photo_svg__b" x1={437.25} y1={574.51} x2={437.25} y2={36.62} xlinkHref="#Photo_svg__a" />
      <clipPath id="Photo_svg__c" transform="translate(-163.46 -145.98)">
        <rect x={216.65} y={194.98} width={767.31} height={510.36} rx={8.85} ry={8.85} fill="#fff" />
      </clipPath>
    </defs>
    <path
      d="M1036 734.86a19.06 19.06 0 01-19 19.14H183a19.06 19.06 0 01-19-19.16v-569.7A19.06 19.06 0 01183 146h834a19.06 19.06 0 0119 19.16"
      transform="translate(-163.46 -145.98)"
      fill="url(#Photo_svg__a)"
    />
    <path
      d="M862.73 579.56a18.52 18.52 0 01-18.52 18.52H29.47a18.52 18.52 0 01-18.52-18.52V28.8a18.52 18.52 0 0118.52-18.52h814.74a18.52 18.52 0 0118.52 18.52"
      fill="#fff"
    />
    <rect
      x={43.49}
      y={36.62}
      width={787.52}
      height={537.89}
      rx={8.85}
      ry={8.85}
      fill="url(#Photo_svg__b)"
      data-name="&lt;Rectangle&gt;"
    />
    <rect x={53.19} y={49} width={767.31} height={510.36} rx={8.85} ry={8.85} fill="#fff" />
    <g clipPath="url(#Photo_svg__c)">
      <path
        d="M10.54 554.68l214.21-245.47a42.64 42.64 0 0160.34-3.94l60 52.93a42.64 42.64 0 0055.65.67l183.32-154.12a42.64 42.64 0 0159 4l225 247.64a42.64 42.64 0 0110.91 24.9l8.68 97.69a42.64 42.64 0 01-42.48 46.42H42.65A42.64 42.64 0 01.02 584.02a42.64 42.64 0 0110.52-29.34z"
        fill={props.primarycolor}
      />
    </g>
    <circle cx={145.58} cy={130.83} r={47.52} fill="#ff5252" />
  </svg>
);
SvgPhoto.defaultProps = {
  primarycolor: '#6c63ff',
  accentcolor: '#3f3d56',
  haircolor: '#2f2e41',
  skincolor: '#ffb9b9',
};
