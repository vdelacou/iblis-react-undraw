import React, { SVGProps } from 'react';
import { IIblisReactUndrawProps } from '../iblis_react_undraw_props';
export const SvgMapDark = (props: IIblisReactUndrawProps & SVGProps<SVGSVGElement>) => (
  <svg
    data-name="Layer 1"
    viewBox="0 0 1142.046 959.789"
    className={props.class}
    width="100%"
    height={props.height}
    {...props}
  >
    <defs>
      <linearGradient
        id="MapDark_svg__a"
        x1={535.451}
        y1={779.244}
        x2={535.451}
        y2={104.907}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="gray" stopOpacity={0.25} />
        <stop offset={0.535} stopColor="gray" stopOpacity={0.12} />
        <stop offset={1} stopColor="gray" stopOpacity={0.1} />
      </linearGradient>
      <linearGradient
        id="MapDark_svg__c"
        x1={873.186}
        y1={742.811}
        x2={873.186}
        y2={620.076}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopOpacity={0.12} />
        <stop offset={0.551} stopOpacity={0.09} />
        <stop offset={1} stopOpacity={0.02} />
      </linearGradient>
      <clipPath id="MapDark_svg__b" transform="translate(-64.55 -7.924)">
        <path
          fill={props.primarycolor}
          d="M889.286 734.556H724.703l-251.058 24.269-253.001-24.269V139.96l251.952 18.202 257.393-18.202 251.797 34.381v467.184l-92.5 93.031z"
        />
      </clipPath>
    </defs>
    <path
      fill="url(#MapDark_svg__a)"
      d="M829.064 752.8H669.299l-272.121 26.444L122.951 752.8V104.907l273.09 19.833 278.988-19.833 272.922 37.463-7.006 497.539L829.064 752.8z"
    />
    <path
      fill="#fff"
      d="M823.856 743.794h-156.27l-266.168 25.73-268.228-25.73V113.412l267.116 19.297 272.884-19.297 266.952 36.451-6.853 484.092-109.433 109.839z"
    />
    <path
      fill={props.primarycolor}
      d="M824.736 726.631H660.154l-251.058 24.27-253.001-24.27V132.035l251.952 18.202 257.393-18.202 251.797 34.382V633.6l-92.501 93.031z"
    />
    <g clipPath="url(#MapDark_svg__b)">
      <path
        fill="#fff"
        d="M1142.046 905.143l-577.957-320.06L710.891 97.332l-49.96-19.812-71.143 236.373L22.967 0 0 54.646l572.409 316.988-130.683 434.194 49.96 19.812 55.024-182.817 572.369 316.966 22.967-54.646z"
      />
    </g>
    <path fill="url(#MapDark_svg__c)" d="M813.083 742.811l1.936-122.735 118.27 4.771-120.206 117.964z" />
    <path
      fill="#fff"
      d="M156.095 388.993l362.749 160.612 24.107 49.971-24 25-362.856-172.087v-63.496zM823.856 742.811l1.762-113.256 107.671 4.402-109.433 108.854zM648.951 647.576l151.358-497.125 60.21 8.221-169.568 514.904-42-26z"
    />
    <path opacity={0.1} d="M408.047 750.901l251.952-24.27V132.035l-251.952 18.202" />
    <path
      d="M638.799 348.436c0 48.03-86.965 184.042-86.965 184.042s-86.965-136.013-86.965-184.042a86.965 86.965 0 11173.93 0z"
      fill="#ff5252"
    />
    <circle cx={551.834} cy={342.369} r={26.292} fill="#fff" />
    <path
      fill="#fff"
      d="M784.67 388.993l132.567 34.016v63.496l-162.286-57.929 29.719-39.583zM279.434 510.983l-33.483 231.593 38 8 50.059-213.71-.059-30.29-54.517 4.407zM278.084 208.643l-37.57 217.728 29.09 15.705 69.347-233.5-60.867.067z"
    />
    <circle cx={349.951} cy={165.576} r={8} fill="#ff5252" />
    <circle cx={253.951} cy={579.576} r={8} fill="#ff5252" />
    <circle cx={245.951} cy={638.576} r={8} fill="#ff5252" />
    <circle cx={330.951} cy={624.576} r={8} fill="#ff5252" />
    <circle cx={193.951} cy={384.576} r={8} fill="#ff5252" />
    <circle cx={823.951} cy={376.576} r={8} fill="#ff5252" />
    <circle cx={754.951} cy={654.576} r={8} fill="#ff5252" />
  </svg>
);
SvgMapDark.defaultProps = {
  primarycolor: '#6c63ff',
  accentcolor: '#3f3d56',
  haircolor: '#2f2e41',
  skincolor: '#ffb9b9',
};
