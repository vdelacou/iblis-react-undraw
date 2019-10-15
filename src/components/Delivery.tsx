import React, { SVGProps } from 'react';
import { IIblisReactUndrawProps } from '../iblis_react_undraw_props';
export const SvgDelivery = (props: IIblisReactUndrawProps & SVGProps<SVGSVGElement>) => (
  <svg
    data-name="Layer 1"
    viewBox="0 0 896.26 886.06"
    className={props.class}
    width="100%"
    height={props.height}
    {...props}
  >
    <defs>
      <linearGradient
        id="Delivery_svg__a"
        x1={654.31}
        y1={787.12}
        x2={654.31}
        y2={483.17}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="gray" stopOpacity={0.25} />
        <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
        <stop offset={1} stopColor="gray" stopOpacity={0.1} />
      </linearGradient>
      <linearGradient
        id="Delivery_svg__c"
        x1={310.24}
        y1={813.28}
        x2={310.24}
        y2={53.35}
        xlinkHref="#Delivery_svg__a"
      />
      <linearGradient id="Delivery_svg__b" x1={413.1} y1={523.43} x2={413.1} y2={308.51} gradientUnits="userSpaceOnUse">
        <stop offset={0} stopOpacity={0.12} />
        <stop offset={0.55} stopOpacity={0.09} />
        <stop offset={1} stopOpacity={0.02} />
      </linearGradient>
      <linearGradient
        id="Delivery_svg__e"
        x1={309.36}
        y1={376.83}
        x2={309.36}
        y2={335.13}
        xlinkHref="#Delivery_svg__b"
      />
      <clipPath id="Delivery_svg__d" transform="translate(-103.74 -16.68)">
        <path data-name="&lt;Rectangle&gt;" fill={props.primarycolor} d="M256.61 133.55h312.75v588.49H256.61z" />
      </clipPath>
    </defs>
    <path fill="url(#Delivery_svg__a)" d="M412.36 483.17h483.89v303.95H412.36z" />
    <path fill="#fff" d="M412.36 490.73h477.81V774.4H412.36z" />
    <g opacity={0.6} fill={props.primarycolor}>
      <path d="M808.72 512.34h60.79v44.98h-60.79zM586.23 630.28h233.43v14.59H586.23zM586.23 666.75h170.21v9.73H586.23z" />
    </g>
    <rect x={96.26} y={53.35} width={427.96} height={759.94} rx={10} ry={10} fill="url(#Delivery_svg__c)" />
    <rect x={107.25} y={65.74} width={403.97} height={723.15} rx={10} ry={10} fill="#fff" />
    <path data-name="&lt;Rectangle&gt;" fill={props.primarycolor} d="M152.86 116.86h312.75v588.49H152.86z" />
    <g clipPath="url(#Delivery_svg__d)" fill="#2196f3" stroke="#fff" strokeMiterlimit={10} strokeWidth={7}>
      <path d="M28.17 477.63l624.65-301.52M195.68 2.11l218.67 289.11M15.2 105.86l226.12 268.88M176.63 405.97L530.7 883.98M2.23 813.73l295.23-244.64M575.01 433.32L353.05 644.14" />
    </g>
    <circle cx={309.24} cy={747.75} r={24.94} fill="#dbdbdb" />
    <circle cx={261.86} cy={89.43} r={4.99} fill="#dbdbdb" />
    <rect x={284.3} y={85.69} width={77.3} height={7.48} rx={1.5} ry={1.5} fill="#dbdbdb" />
    <path
      d="M482.07 377.47c0 38.09-69 146-69 146s-69-107.86-69-146a69 69 0 11137.93 0z"
      transform="translate(-103.74 -16.68)"
      fill="url(#Delivery_svg__b)"
    />
    <circle cx={309.36} cy={355.98} r={20.85} fill="url(#Delivery_svg__e)" />
    <path
      d="M363.11 369.32c0 29.68-53.75 113.74-53.75 113.74s-53.75-84.09-53.75-113.74a53.75 53.75 0 11107.49 0z"
      fill="#ff5252"
    />
    <circle cx={309.36} cy={365.54} r={16.25} fill="#fff" />
  </svg>
);
SvgDelivery.defaultProps = {
  primarycolor: '#6c63ff',
  accentcolor: '#3f3d56',
  haircolor: '#2f2e41',
  skincolor: '#ffb9b9',
};
