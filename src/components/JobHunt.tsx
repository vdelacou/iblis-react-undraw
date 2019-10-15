import React, { SVGProps } from 'react';
import { IIblisReactUndrawProps } from '../iblis_react_undraw_props';
export const SvgJobHunt = (props: IIblisReactUndrawProps & SVGProps<SVGSVGElement>) => (
  <svg
    data-name="Layer 1"
    viewBox="0 0 480.07 572.254"
    className={props.class}
    width="100%"
    height={props.height}
    {...props}
  >
    <defs>
      <linearGradient
        id="JobHunt_svg__a"
        x1={404.641}
        y1={550.423}
        x2={404.641}
        y2={454.423}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="gray" stopOpacity={0.25} />
        <stop offset={0.535} stopColor="gray" stopOpacity={0.12} />
        <stop offset={1} stopColor="gray" stopOpacity={0.1} />
      </linearGradient>
    </defs>
    <path fill={props.accentcolor} d="M0 0h480.07v572.254H0z" />
    <path
      fill="#e0e0e0"
      d="M71.831 155.07h337.606v14.366H71.831zM71.831 249.648h337.606v14.366H71.831zM71.831 274.789h337.606v14.366H71.831z"
    />
    <path fill="#3ad29f" opacity={0.6} d="M302.887 224.507h106.549v14.366H302.887z" />
    <path fill={props.primarycolor} d="M190.352 333.451h106.549v14.366H190.352z" />
    <circle cx={404.641} cy={502.423} r={48} fill="url(#JobHunt_svg__a)" opacity={0.5} />
    <circle cx={404.641} cy={502.423} r={45.176} fill="#69f0ae" />
    <path fill="#fff" d="M385.7 495.599l16.941 15.529 24-35.294 8.47 7.059-32.47 42.353-24-26.823 7.059-2.824z" />
  </svg>
);
SvgJobHunt.defaultProps = {
  primarycolor: '#6c63ff',
  accentcolor: '#3f3d56',
  haircolor: '#2f2e41',
  skincolor: '#ffb9b9',
};
