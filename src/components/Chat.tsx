import React, { SVGProps } from 'react';
import { IIblisReactUndrawProps } from '../iblis_react_undraw_props';
export const SvgChat = (props: IIblisReactUndrawProps & SVGProps<SVGSVGElement>) => (
  <svg
    data-name="Layer 1"
    viewBox="0 0 869 634.74"
    className={props.class}
    width="100%"
    height={props.height}
    {...props}
  >
    <defs>
      <linearGradient id="Chat_svg__a" x1={762.35} y1={767.37} x2={762.35} y2={290.82} gradientUnits="userSpaceOnUse">
        <stop offset={0.01} stopColor="gray" stopOpacity={0.25} />
        <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
        <stop offset={1} stopColor="gray" stopOpacity={0.1} />
      </linearGradient>
      <linearGradient id="Chat_svg__b" x1={436.09} y1={608.57} x2={436.09} y2={132.63} xlinkHref="#Chat_svg__a" />
    </defs>
    <path
      d="M998.41 290.82H566.95c-42.38 0-76.74 34.69-76.74 77.48v268.18a36.26 36.26 0 0036.09 36.44h274c9.12 31.56 32 75.06 89.64 94.45l-16.27-94.45h124.74a36.26 36.26 0 0036.09-36.44V327.26a36.26 36.26 0 00-36.09-36.44z"
      transform="translate(-165.5 -132.63)"
      fill="url(#Chat_svg__a)"
    />
    <path
      d="M825.65 167.23h-418.8a74.49 74.49 0 00-74.49 74.49v257.82a35 35 0 0035 35h265.97c8.85 30.34 31.09 72.16 87 90.8l-15.83-90.77h121.1a35 35 0 0035-35V202.26a35 35 0 00-34.95-35.03z"
      fill="#fafafa"
    />
    <path
      fill="#e0e0e0"
      d="M500.77 234.16h216.47v27.06H500.77zM634.84 284.12h81.18v27.06h-81.18zM554.7 334.07h160.08v27.06H554.7zM517.24 384.03h196.32v27.06H517.24zM608.82 433.98h103.51v27.06H608.82z"
    />
    <path
      d="M201.38 132.63h469.41c19.82 0 35.88 16.29 35.88 36.39v308.83c0 20.1-16.06 36.39-35.88 36.39H398.38c-9.07 31.52-31.85 75-89.13 94.33l16.18-94.33h-124c-19.82 0-35.88-16.29-35.88-36.39V169c-.05-20.08 16.01-36.37 35.83-36.37z"
      transform="translate(-165.5 -132.63)"
      fill="url(#Chat_svg__b)"
    />
    <path
      d="M41.27 9.47H499.5a35 35 0 0135 35v297.31a35 35 0 01-35 35H233.59c-8.85 30.34-31.09 72.16-87 90.8l15.79-90.8H41.27a35 35 0 01-35-35V44.5a35 35 0 0135-35.03z"
      fill="#fff"
    />
    <path
      fill={props.primarycolor}
      d="M162.16 66.61h216.47v27.06H162.16zM163.39 116.56h81.18v27.06h-81.18zM164.62 166.51H324.7v27.06H164.62zM165.85 216.47h196.32v27.06H165.85zM167.08 266.42h103.51v27.06H167.08z"
    />
  </svg>
);
SvgChat.defaultProps = {
  primarycolor: '#6c63ff',
  accentcolor: '#3f3d56',
  haircolor: '#2f2e41',
  skincolor: '#ffb9b9',
};
