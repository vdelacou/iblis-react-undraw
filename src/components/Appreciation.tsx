import React, { SVGProps } from 'react';
import { IIblisReactUndrawProps } from '../iblis_react_undraw_props';
export const SvgAppreciation = (props: IIblisReactUndrawProps & SVGProps<SVGSVGElement>) => (
  <svg
    data-name="Layer 1"
    viewBox="0 0 933.099 737.161"
    className={props.class}
    width="100%"
    height={props.height}
    {...props}
  >
    <defs>
      <linearGradient
        id="Appreciation_svg__a"
        x1={611.671}
        y1={818.58}
        x2={611.671}
        y2={81.42}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="gray" stopOpacity={0.25} />
        <stop offset={0.535} stopColor="gray" stopOpacity={0.12} />
        <stop offset={1} stopColor="gray" stopOpacity={0.1} />
      </linearGradient>
      <linearGradient
        id="Appreciation_svg__b"
        x1={872.969}
        y1={716.168}
        x2={872.969}
        y2={344.73}
        xlinkHref="#Appreciation_svg__a"
      />
    </defs>
    <path
      d="M686.175 512.336c-32.021-65.111-6.404-121.683 38.426-161.176 61.91-28.82 122.75-16.011 167.58 41.628 29.254-17.096 66.5-20.797 97.133-13.876 23.637-89.026 1.504-195.762-77.39-253.304C809.3 50.759 665.43 73.275 590.581 175.898 487.96 101.05 344.09 123.567 269.242 226.19s-52.333 246.493 50.29 321.341l371.632 271.05 98.548-136.53z"
      transform="translate(-133.45 -81.42)"
      fill="url(#Appreciation_svg__a)"
    />
    <path
      d="M893.59 401.696a114.944 114.944 0 10-198.479 115.993l115.993 198.48 198.48-115.993a114.944 114.944 0 10-115.994-198.48z"
      transform="translate(-133.45 -81.42)"
      fill="url(#Appreciation_svg__b)"
    />
    <path
      d="M759.182 323.928a109.605 109.605 0 00-189.26 110.605l110.605 189.26 189.26-110.605a109.605 109.605 0 10-110.605-189.26z"
      fill="#e53935"
    />
    <path d="M867.787 514.188A109.602 109.602 0 00757.65 324.663l108.972 190.206z" opacity={0.2} />
    <path
      d="M848.443 292.58a122.402 122.402 0 00-89.02 13.76 122.831 122.831 0 00-212.1 123.95l97.45 166.76-90.37 123.92-185.57-135.35 15.63-9.13a139.627 139.627 0 00-124.86-249.14 141.395 141.395 0 00-16.04 8.05 139.622 139.622 0 00-134.11-68.54 220.217 220.217 0 015.1-32.93c.28-1.2.58-2.41.88-3.62q1.8-7.125 4.08-14.17c.12-.36.23-.73.36-1.09.69-2.08 1.42-4.16 2.17-6.23.86-2.36 1.77-4.72 2.72-7.06.47-1.17.95-2.34 1.45-3.5q.72-1.695 1.47-3.39a.917.917 0 01.05-.1c.51-1.16 1.04-2.31 1.58-3.46.06-.14.12-.28.19-.41.48-1.02.96-2.03 1.46-3.04.56-1.15 1.13-2.29 1.71-3.43 1.23-2.43 2.52-4.83 3.86-7.23.48-.88.98-1.75 1.49-2.62.6-1.05 1.21-2.1 1.84-3.14.29-.48.58-.97.88-1.45q2.444-4.035 5.1-7.99.615-.93 1.26-1.86c.58-.85 1.17-1.7 1.76-2.54.71-1 1.42-2 2.15-3 71.56-98.11 209.11-119.64 307.22-48.08 71.56-98.11 209.11-119.64 307.23-48.08a219.969 219.969 0 0182.98 234.14z"
      fill={props.primarycolor}
    />
    <path
      d="M230.731 355.21A123.813 123.813 0 0016.936 480.153L141.88 693.948l213.795-124.943A123.813 123.813 0 00230.731 355.21z"
      fill="#e53935"
    />
    <path
      d="M458.602 106.58l-199 220.77a141.395 141.395 0 00-16.04 8.05 139.622 139.622 0 00-134.11-68.54 220.217 220.217 0 015.1-32.93c.28-1.2.58-2.41.88-3.62q1.785-7.125 4.08-14.17c.12-.36.23-.73.36-1.09q1.035-3.12 2.17-6.23c.86-2.36 1.76-4.72 2.72-7.06.47-1.17.95-2.34 1.45-3.5q.72-1.695 1.47-3.39a.917.917 0 01.05-.1c.51-1.16 1.04-2.31 1.58-3.46.06-.14.12-.28.19-.41.48-1.02.96-2.03 1.46-3.04.56-1.15 1.13-2.29 1.71-3.43 1.23-2.43 2.52-4.83 3.86-7.23.48-.88.98-1.75 1.49-2.62.6-1.05 1.21-2.1 1.84-3.14.29-.48.58-.97.88-1.45q2.445-4.035 5.1-7.99.616-.93 1.26-1.86c.58-.85 1.17-1.7 1.76-2.54.71-1 1.42-2 2.15-3 71.56-98.11 209.11-119.64 307.22-48.08.1-.12.19-.25.29-.37z"
      opacity={0.2}
    />
  </svg>
);
SvgAppreciation.defaultProps = {
  primarycolor: '#6c63ff',
  accentcolor: '#3f3d56',
  haircolor: '#2f2e41',
  skincolor: '#ffb9b9',
};