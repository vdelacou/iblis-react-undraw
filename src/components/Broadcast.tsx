import React, { SVGProps } from 'react';
import { IIblisReactUndrawProps } from '../iblis_react_undraw_props';
export const SvgBroadcast = (props: IIblisReactUndrawProps & SVGProps<SVGSVGElement>) => (
  <svg
    data-name="Layer 1"
    viewBox="0 0 605.25 761.48"
    className={props.class}
    width="100%"
    height={props.height}
    {...props}
  >
    <defs>
      <linearGradient
        id="Broadcast_svg__a"
        x1={304.32}
        y1={452.8}
        x2={304.32}
        y2={148.23}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="gray" stopOpacity={0.25} />
        <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
        <stop offset={1} stopColor="gray" stopOpacity={0.1} />
      </linearGradient>
    </defs>
    <path
      d="M550.14 79.38a84.83 84.83 0 0131.57 57.89 6.66 6.66 0 006.82 6l10.24-.3a6.68 6.68 0 006.46-7.31 108.65 108.65 0 00-113.2-98.3 6.69 6.69 0 00-6.34 7.42l1.14 10.18a6.65 6.65 0 006.85 5.92 84.79 84.79 0 0156.46 18.5z"
      fill={props.primarycolor}
    />
    <path
      d="M541.97 89.62a84.78 84.78 0 00-55.4-18.56 6.67 6.67 0 00-6.42 7.42l.85 7.59a6.66 6.66 0 006.74 5.92 64.15 64.15 0 0164.79 56.22 6.68 6.68 0 006.81 5.89l7.63-.22a6.66 6.66 0 006.45-7.37 84.82 84.82 0 00-31.45-56.89z"
      fill={props.primarycolor}
    />
    <path
      d="M510.11 129.54a47 47 0 0117.15 29.52 6.73 6.73 0 006.81 5.77l3.69-.11a6.69 6.69 0 006.41-7.69 64.15 64.15 0 00-63.32-54.82 6.64 6.64 0 00-6.52 7.42l.41 3.68a6.73 6.73 0 006.67 5.93 46.94 46.94 0 0128.7 10.3zM55.12 79.38a84.83 84.83 0 00-31.57 57.89 6.66 6.66 0 01-6.82 6l-10.24-.3a6.68 6.68 0 01-6.46-7.31 108.65 108.65 0 01113.2-98.3 6.69 6.69 0 016.34 7.42l-1.14 10.16a6.65 6.65 0 01-6.85 5.92 84.79 84.79 0 00-56.46 18.52z"
      fill={props.primarycolor}
    />
    <path
      d="M63.29 89.62a84.78 84.78 0 0155.4-18.56 6.67 6.67 0 016.42 7.42l-.85 7.59a6.66 6.66 0 01-6.74 5.92 64.15 64.15 0 00-64.79 56.22 6.68 6.68 0 01-6.81 5.89l-7.63-.22a6.66 6.66 0 01-6.45-7.37 84.82 84.82 0 0131.45-56.89z"
      fill={props.primarycolor}
    />
    <path
      d="M95.15 129.54A47 47 0 0078 159.06a6.73 6.73 0 01-6.81 5.77l-3.69-.11a6.69 6.69 0 01-6.41-7.69 64.15 64.15 0 0163.32-54.82 6.64 6.64 0 016.52 7.42l-.41 3.68a6.73 6.73 0 01-6.67 5.93 46.94 46.94 0 00-28.7 10.3z"
      fill={props.primarycolor}
    />
    <path
      d="M280.56 753.65V18.99a19 19 0 0119-19h11.26a19 19 0 0119 19v734.66c-.02 10.44-49.26 10.44-49.26 0z"
      fill="#535461"
    />
    <rect x={120.96} y={148.23} width={366.73} height={304.56} rx={44.36} ry={44.36} fill="url(#Broadcast_svg__a)" />
    <rect x={125.44} y={152.71} width={358.31} height={295.61} rx={44.36} ry={44.36} fill="#fff" />
    <path
      d="M321.1 275.35a4.76 4.76 0 014.75 4.75v40.83a4.76 4.76 0 01-4.75 4.75h-36.94a4.76 4.76 0 01-4.75-4.75V280.1a4.76 4.76 0 014.75-4.75h36.95m0-2h-36.95a6.75 6.75 0 00-6.75 6.75v40.83a6.75 6.75 0 006.75 6.75h36.95a6.75 6.75 0 006.75-6.75V280.1a6.75 6.75 0 00-6.75-6.75z"
      fill="#e0e0e0"
    />
    <path
      fill="none"
      stroke={props.primarycolor}
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M302.63 288.42v11.46M307.43 293.44a10.19 10.19 0 11-9.42-.09"
    />
  </svg>
);
SvgBroadcast.defaultProps = {
  primarycolor: '#6c63ff',
  accentcolor: '#3f3d56',
  haircolor: '#2f2e41',
  skincolor: '#ffb9b9',
};
