import React, { SVGProps } from 'react';
import { IIblisReactUndrawProps } from '../iblis_react_undraw_props';
export const SvgSearch = (props: IIblisReactUndrawProps & SVGProps<SVGSVGElement>) => (
  <svg
    data-name="Layer 1"
    viewBox="0 0 871.909 596.6"
    className={props.class}
    width="100%"
    height={props.height}
    {...props}
  >
    <defs>
      <linearGradient id="Search_svg__b" x1={435.954} y1={161.227} x2={435.954} gradientUnits="userSpaceOnUse">
        <stop offset={0} stopColor="gray" stopOpacity={0.25} />
        <stop offset={0.535} stopColor="gray" stopOpacity={0.12} />
        <stop offset={1} stopColor="gray" stopOpacity={0.1} />
      </linearGradient>
      <linearGradient
        id="Search_svg__c"
        x1={895.456}
        y1={298.735}
        x2={895.456}
        y2={178.444}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#b3b3b3" stopOpacity={0.25} />
        <stop offset={0.535} stopColor="#b3b3b3" stopOpacity={0.1} />
        <stop offset={1} stopColor="#b3b3b3" stopOpacity={0.05} />
      </linearGradient>
      <linearGradient
        id="Search_svg__a"
        x1={858.283}
        y1={221.343}
        x2={858.283}
        y2={215.554}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopOpacity={0.12} />
        <stop offset={0.551} stopOpacity={0.09} />
        <stop offset={1} stopOpacity={0.02} />
      </linearGradient>
      <linearGradient
        id="Search_svg__d"
        x1={884.876}
        y1={214.701}
        x2={884.876}
        y2={196.998}
        xlinkHref="#Search_svg__a"
      />
    </defs>
    <path fill="url(#Search_svg__b)" d="M0 0h871.909v161.227H0z" />
    <path fill="#fff" d="M5.091 5.277h860.453v147.379H5.091z" />
    <path fill="#f5f5f5" d="M57.939 35.365h500.194v87.713H57.939z" />
    <path
      d="M916.212 192.662a46.319 46.319 0 10-7.578 70.553l33.484 34.829a2.254 2.254 0 003.187.062l8.344-8.022a2.254 2.254 0 00.063-3.187l-33.484-34.828a46.322 46.322 0 00-4.016-59.407zm-10.429 55.985a33.13 33.13 0 11.922-46.845 33.131 33.131 0 01-.922 46.845z"
      transform="translate(-164.046 -151.7)"
      fill="url(#Search_svg__c)"
    />
    <path
      d="M858.283 215.554c-3.726 0-3.732 5.79 0 5.79 3.725 0 3.731-5.79 0-5.79z"
      transform="translate(-164.046 -151.7)"
      fill="url(#Search_svg__a)"
    />
    <path
      d="M884.254 197.005a27.83 27.83 0 00-24.005 12.4c-1.583 2.477 2.911 4.666 4.486 2.202 4.017-6.288 11.651-10.28 19.902-10.074a25.36 25.36 0 0120.695 12.037c1.582 2.607 5.726.236 4.154-2.354-5.054-8.33-14.872-13.976-25.232-14.21z"
      transform="translate(-164.046 -151.7)"
      fill="url(#Search_svg__d)"
    />
    <path
      d="M752.167 35.87a46.319 46.319 0 10-7.579 70.554l33.484 34.828a2.254 2.254 0 003.187.063l8.345-8.023a2.254 2.254 0 00.062-3.186l-33.484-34.829a46.322 46.322 0 00-4.015-59.407zm-10.43 55.985a33.13 33.13 0 11.923-46.845 33.131 33.131 0 01-.922 46.845z"
      fill={props.primarycolor}
    />
    <path
      d="M694.237 58.762c-3.725 0-3.732 5.79 0 5.79 3.726 0 3.732-5.79 0-5.79zM720.209 40.214a27.83 27.83 0 00-24.006 12.399c-1.582 2.477 2.912 4.666 4.486 2.202 4.017-6.288 11.652-10.28 19.902-10.073a25.36 25.36 0 0120.695 12.036c1.582 2.608 5.726.237 4.154-2.354-5.054-8.329-14.871-13.976-25.231-14.21z"
      fill={props.primarycolor}
    />
    <path
      fill="#e0e0e0"
      d="M4.909 240.6h867v59h-867zM4.909 339.6h867v59h-867zM4.909 438.6h867v59h-867zM4.909 537.6h867v59h-867z"
    />
  </svg>
);
SvgSearch.defaultProps = {
  primarycolor: '#6c63ff',
  accentcolor: '#3f3d56',
  haircolor: '#2f2e41',
  skincolor: '#ffb9b9',
};
