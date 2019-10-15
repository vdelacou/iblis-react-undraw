import React, { SVGProps } from 'react';
import { IIblisReactUndrawProps } from '../iblis_react_undraw_props';
export const SvgAddress = (props: IIblisReactUndrawProps & SVGProps<SVGSVGElement>) => (
  <svg
    data-name="Layer 1"
    viewBox="0 0 945.48 723.06"
    className={props.class}
    width="100%"
    height={props.height}
    {...props}
  >
    <defs>
      <linearGradient
        id="Address_svg__a"
        x1={740.07}
        y1={472.54}
        x2={740.07}
        y2={118.79}
        gradientTransform="matrix(0 1.01 -1 0 1038.56 -429.84)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="gray" stopOpacity={0.25} />
        <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
        <stop offset={1} stopColor="gray" stopOpacity={0.1} />
      </linearGradient>
      <linearGradient
        id="Address_svg__c"
        x1={627.79}
        y1={238.31}
        x2={627.79}
        y2={82.56}
        gradientTransform="rotate(7.89 589.222 306.706)"
        xlinkHref="#Address_svg__a"
      />
      <linearGradient id="Address_svg__d" x1={367.4} y1={723.06} x2={367.4} y2={213.51} xlinkHref="#Address_svg__a" />
      <linearGradient id="Address_svg__e" x1={367.14} y1={582.74} x2={367.14} y2={556.61} xlinkHref="#Address_svg__a" />
      <clipPath id="Address_svg__b" transform="translate(-130 -89.47)">
        <path
          data-name="&lt;Rectangle&gt;"
          transform="rotate(7.89 742.129 316.195)"
          fill={props.primarycolor}
          d="M448.64 159.18h586.78v313.91H448.64z"
        />
      </clipPath>
    </defs>
    <path
      transform="rotate(-82.11 626.527 346.765)"
      fill="url(#Address_svg__a)"
      d="M566.02 5.62h353.76v622.49H566.02z"
    />
    <path fill="#fff" d="M331.81 14.742l607.286 84.16-47.235 340.843-607.286-84.16z" />
    <g opacity={0.3}>
      <path
        data-name="&lt;Rectangle&gt;"
        fill={props.primarycolor}
        d="M342.972 30.909l581.225 80.548-43.09 310.938-581.226-80.548z"
      />
      <g clipPath="url(#Address_svg__b)">
        <path
          fill={props.primarycolor}
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={5}
          d="M305.89 25.78L541.8 416.84l143.51 19.89 250.56-145.67L738.08 29.61 387.52 395.45l-200.43-75.31L545.2 5.32l291.99 452.46"
        />
      </g>
    </g>
    <path
      d="M704.85 151.82c-4.16 30-65.87 92.74-65.87 92.74s-46.66-77.76-42.5-107.76a54.71 54.71 0 11108.38 15z"
      transform="translate(-130 -89.47)"
      fill="url(#Address_svg__c)"
    />
    <path
      d="M571.29 63.3c-3.9 28.14-61.79 87-61.79 87s-43.77-72.94-39.87-101.08a51.31 51.31 0 11101.65 14.09z"
      fill={props.primarycolor}
    />
    <ellipse cx={651.03} cy={141.65} rx={25.72} ry={25.66} transform="rotate(-82.11 534.66 171.55)" fill="#fff" />
    <path fill="url(#Address_svg__d)" d="M0 213.51V723.06h734.81V213.51H0z" />
    <path fill="#fff" d="M10.9 245.21h716.12V714H10.9z" />
    <path fill="#f5f5f5" d="M10.9 222.91h716.12v34.49H10.9z" />
    <circle cx={38.15} cy={239.64} r={8.36} fill="#ff5252" />
    <circle cx={61.15} cy={239.64} r={8.36} fill="#ff0" />
    <circle cx={84.14} cy={239.64} r={8.36} fill="#69f0ae" />
    <path fill={props.primarycolor} opacity={0.5} d="M301.81 370.55h131.7v14.11h-131.7z" />
    <path
      fill="#e0e0e0"
      d="M206.7 431.18h144.24v14.11H206.7zM528.63 445.29H384.39v-14.11h144.24zM206.17 461.49H528.1v14.11H206.17zM206.17 491.8H528.1v14.11H206.17z"
    />
    <path fill="url(#Address_svg__e)" d="M300.25 556.61h133.79v26.13H300.25z" />
    <path fill={props.primarycolor} d="M301.29 558.98h131.7v21.38h-131.7z" />
  </svg>
);
SvgAddress.defaultProps = {
  primarycolor: '#6c63ff',
  accentcolor: '#3f3d56',
  haircolor: '#2f2e41',
  skincolor: '#ffb9b9',
};
