import React, { SVGProps } from 'react';
import { IIblisReactUndrawProps } from '../iblis_react_undraw_props';
export const SvgTakingSelfie = (props: IIblisReactUndrawProps & SVGProps<SVGSVGElement>) => (
  <svg
    data-name="Layer 1"
    viewBox="0 0 836.965 677.027"
    className={props.class}
    width="100%"
    height={props.height}
    {...props}
  >
    <path fill="#f2f2f2" d="M326.236 671.863l510.729-257.565L628.031 0 98.794 242.164l227.442 429.699z" />
    <circle cx={684.504} cy={495.199} r={31.248} fill={props.primarycolor} opacity={0.4} />
    <circle cx={626.672} cy={510.123} r={21.92} fill={props.primarycolor} opacity={0.4} />
    <path fill="#f2f2f2" d="M89.065 453.068l84.87 49-49 84.87-84.87-49z" />
    <path
      d="M591 318.004a22 22 0 1122-22 22.025 22.025 0 01-22 22zm0-42a20 20 0 1020 20 20.022 20.022 0 00-20-20zM214 255.004a22 22 0 1122-22 22.025 22.025 0 01-22 22zm0-42a20 20 0 1020 20 20.022 20.022 0 00-20-20zM127 604.004a22 22 0 1122-22 22.025 22.025 0 01-22 22zm0-42a20 20 0 1020 20 20.022 20.022 0 00-20-20z"
      fill={props.accentcolor}
    />
    <ellipse
      cx={495.517}
      cy={344.013}
      rx={34}
      ry={20.5}
      transform="rotate(-48.312 280.468 490.634)"
      fill={props.haircolor}
    />
    <circle cx={378.5} cy={295.527} r={89} fill={props.haircolor} />
    <path
      d="M118.413 256.302l-82.725 6.768a13.688 13.688 0 00-12.536 12.654l-3.088 42.625a13.688 13.688 0 0013.652 14.678H71v2h15v-2h8v2h15v-2h7.996a13.688 13.688 0 0013.67-12.987l2.533-49.395a13.688 13.688 0 00-14.786-14.343z"
      fill={props.haircolor}
    />
    <path d="M171 391.027l-117-55-21 33s60.838 38.837 64 42c4.5 4.5 53 36 72 31s10-46 2-51z" fill="#9f616a" />
    <path fill={props.haircolor} d="M251 643.027l-15 34h155.28l-11.28-36-129 2z" />
    <path d="M346 367.027s6 33 0 37 40 53 40 53l19-17 6-39s-18-25-10-47-55 13-55 13z" fill="#9f616a" />
    <circle cx={364} cy={313.027} r={64} fill="#9f616a" />
    <path
      d="M381 434.027s-25-38-39-41-27-1-35 0-35-9-51-2 0 89 0 89-18 105-10 132 2 32-2 35 91 30 91 30h90s0-29 9-36 8-155 8-155l30-58s-5-22-26-23-39.745-12.025-39.745-12.025L392 434.027z"
      fill={props.primarycolor}
    />
    <path
      d="M265 396.027l-9-5s-17 1-20 0-41-13-56-6-25-2-25-2 49 42-11 55c0 0 1 5 16 8s18 6 24 11 18 10 26 12 34 19 38 15 11-18 11-18zM453 417.027l19 11s25 74 21 92-8 15-2 27 12 13 8 24-2 38-8 49-35 46-60-13 22-190 22-190z"
      fill={props.primarycolor}
    />
    <path
      d="M489 570.027s-14-28-17-30-17-71-17-71 22-36 2-52c0 0 37-52 25-51s-36 39-36 39-5.5-1.5-3.5-9.5 9.5-36.5 3.5-37.5-18 42-18 42-24.5 44.5-17 60a193.22 193.22 0 0015 25l17 124s33 40 46-39z"
      fill="#9f616a"
    />
    <ellipse cx={112} cy={270.027} rx={11} ry={5} fill={props.primarycolor} />
    <path d="M45 369.027H31s-31-10-31-33 9-70 37-69 2 63 2 63l16.95 6.916.05 21.084z" fill="#9f616a" />
    <ellipse cx={353.5} cy={270.527} rx={57} ry={29} fill={props.haircolor} />
    <ellipse cx={430.5} cy={306.527} rx={5} ry={11} fill="#9f616a" />
    <ellipse
      cx={641.517}
      cy={360.013}
      rx={20.5}
      ry={34}
      transform="rotate(-25.902 308.363 698.928)"
      fill={props.haircolor}
    />
  </svg>
);
SvgTakingSelfie.defaultProps = {
  primarycolor: '#6c63ff',
  accentcolor: '#3f3d56',
  haircolor: '#2f2e41',
  skincolor: '#ffb9b9',
};
