import React, { SVGProps } from 'react';
import { IIblisReactUndrawProps } from '../iblis_react_undraw_props';
export const SvgZoomIn = (props: IIblisReactUndrawProps & SVGProps<SVGSVGElement>) => (
  <svg
    data-name="Layer 1"
    viewBox="0 0 1104 560.271"
    className={props.class}
    width="100%"
    height={props.height}
    {...props}
  >
    <path fill={props.primarycolor} d="M0 0h1104v560H0z" />
    <path fill={props.accentcolor} d="M1021.147 484.744h2v74.411h-2z" />
    <circle cx={1022.148} cy={484.744} r={10.523} fill={props.accentcolor} />
    <path d="M1022.148 530.605s-1.504-32.332-32.32-28.574" fill={props.accentcolor} />
    <path
      d="M59.409 523.87c6.073 22.45 26.875 36.354 26.875 36.354s10.955-22.495 4.882-44.945-26.875-36.354-26.875-36.354-10.956 22.495-4.882 44.945z"
      fill="#fff"
    />
    <path
      d="M68.333 519.045c16.665 16.223 18.7 41.16 18.7 41.16s-24.984-1.363-41.648-17.586-18.7-41.16-18.7-41.16 24.983 1.364 41.648 17.586z"
      fill={props.accentcolor}
    />
    <path
      opacity={0.1}
      d="M442.23 0L0 303.64v-69.18L341.53 0h100.7zM274.97 0L0 188.77v-69.14L174.26 0h100.71zM93.46 0L0 64.16V0h93.46z"
    />
    <ellipse cx={552} cy={401.637} rx={159} ry={24} opacity={0.1} />
    <ellipse cx={552} cy={381.637} rx={159} ry={24} opacity={0.1} />
    <ellipse cx={552} cy={361.637} rx={159} ry={24} opacity={0.1} />
    <ellipse cx={552} cy={341.637} rx={159} ry={24} opacity={0.1} />
    <ellipse cx={552} cy={321.637} rx={159} ry={24} opacity={0.1} />
    <ellipse cx={552} cy={301.637} rx={159} ry={24} opacity={0.1} />
    <path
      d="M607.694 228.177c-12.677 46.86-56.097 75.883-56.097 75.883s-22.867-46.954-10.19-93.815 56.096-75.882 56.096-75.882 22.868 46.954 10.191 93.815z"
      fill="#fff"
    />
    <path
      d="M492.372 228.177c12.677 46.86 56.097 75.883 56.097 75.883s22.867-46.954 10.19-93.815-56.096-75.882-56.096-75.882-22.867 46.954-10.19 93.814z"
      fill="#fff"
    />
    <path
      d="M511 218.107c34.784 33.861 39.033 85.915 39.033 85.915s-52.149-2.848-86.933-36.71-39.034-85.914-39.034-85.914 52.149 2.847 86.934 36.709zM589.067 218.107c-34.785 33.861-39.034 85.915-39.034 85.915s52.149-2.848 86.933-36.71S676 181.399 676 181.399s-52.149 2.847-86.933 36.709zM256.172 440.311H818v2H256.172z"
      fill={props.accentcolor}
    />
    <path
      d="M640.172 560.271a12 12 0 1112-12 12.014 12.014 0 01-12 12zm0-22a10 10 0 1010 10 10.011 10.011 0 00-10-10z"
      fill="#f0f0f0"
    />
    <path d="M263 317.561h-19.741v-19.74H263zm-18.223-1.518h16.704v-16.704h-16.704z" fill={props.accentcolor} />
    <path
      d="M792.644 455.641l-13.465-14.436 14.436-13.465 13.465 14.436zm-11.319-14.361l11.394 12.215 12.215-11.393-11.394-12.216z"
      fill="#f0f0f0"
    />
    <path d="M1104 114v286a143 143 0 110-286z" opacity={0.1} />
    <circle cx={972} cy={152} r={110} opacity={0.1} />
    <circle cx={875} cy={88} r={56} opacity={0.1} />
    <path
      d="M875.31 117.072a29.116 29.116 0 1129.116-29.116 29.149 29.149 0 01-29.116 29.116z"
      fill={props.accentcolor}
    />
    <circle cx={550.31} cy={116.956} r={10.079} fill="#f0f0f0" />
    <path
      d="M550.31 146.072a29.116 29.116 0 1129.116-29.116 29.149 29.149 0 01-29.116 29.116zm0-55.992a26.876 26.876 0 1026.876 26.876A26.907 26.907 0 00550.31 90.08z"
      fill={props.haircolor}
    />
  </svg>
);
SvgZoomIn.defaultProps = {
  primarycolor: '#6c63ff',
  accentcolor: '#3f3d56',
  haircolor: '#2f2e41',
  skincolor: '#ffb9b9',
};
