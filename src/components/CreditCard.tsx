import React, { SVGProps } from 'react';
import { IIblisReactUndrawProps } from '../iblis_react_undraw_props';
export const SvgCreditCard = (props: IIblisReactUndrawProps & SVGProps<SVGSVGElement>) => (
  <svg
    data-name="Layer 1"
    viewBox="0 0 915.688 679.276"
    className={props.class}
    width="100%"
    height={props.height}
    {...props}
  >
    <defs>
      <linearGradient
        id="CreditCard_svg__a"
        x1={549.234}
        y1={734.772}
        x2={549.234}
        y2={126.569}
        gradientTransform="matrix(.97485 .30762 -.30291 .99 144.203 -171.29)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="gray" stopOpacity={0.25} />
        <stop offset={0.535} stopColor="gray" stopOpacity={0.12} />
        <stop offset={1} stopColor="gray" stopOpacity={0.1} />
      </linearGradient>
      <linearGradient
        id="CreditCard_svg__b"
        x1={549.323}
        y1={679.276}
        x2={549.323}
        y2={233.836}
        xlinkHref="#CreditCard_svg__a"
      />
    </defs>
    <rect
      x={184.857}
      y={201.53}
      width={728.622}
      height={445.002}
      rx={27.5}
      transform="rotate(-17.262 114.542 837.131)"
      fill="url(#CreditCard_svg__a)"
    />
    <rect
      x={193.72}
      y={205.56}
      width={713.756}
      height={429.252}
      rx={27.5}
      transform="rotate(-17.262 115.972 833.287)"
      fill="#fff"
    />
    <path fill={props.primarycolor} d="M20.736 264.783L702.345 52.988l18.267 58.786L39.002 323.57z" />
    <path fill="#bdbdbd" d="M161.647 527.632l173.183-53.813 7.9 25.421-173.184 53.813z" />
    <path fill="#e0e0e0" d="M148.318 484.733l300.289-93.309 7.899 25.421-300.29 93.309z" />
    <rect x={182.958} y={233.836} width={732.73} height={445.44} rx={27.5} fill="url(#CreditCard_svg__b)" />
    <rect x={191.277} y={238.378} width={713.756} height={429.252} rx={27.5} fill="#fff" />
    <path
      fill="#e0e0e0"
      d="M361.013 446.76h20.797v59.064h-20.797zM387.633 446.76h20.797v59.064h-20.797zM414.253 446.76h20.797v59.064h-20.797zM460.839 446.76h20.797v59.064h-20.797zM487.459 446.76h20.797v59.064h-20.797zM514.079 446.76h20.797v59.064h-20.797zM560.665 446.76h20.797v59.064h-20.797zM587.285 446.76h20.797v59.064h-20.797zM613.905 446.76h20.797v59.064h-20.797zM660.491 446.76h20.797v59.064h-20.797zM687.111 446.76h20.797v59.064h-20.797zM713.731 446.76h20.797v59.064h-20.797z"
    />
    <path fill={props.primarycolor} d="M236.688 350.836h124v68h-124z" />
    <path fill={props.primarycolor} opacity={0.1} d="M718.688 573.836h76v76h-76z" />
    <path fill={props.primarycolor} opacity={0.1} d="M756.688 573.836h76v76h-76z" />
  </svg>
);
SvgCreditCard.defaultProps = {
  primarycolor: '#6c63ff',
  accentcolor: '#3f3d56',
  haircolor: '#2f2e41',
  skincolor: '#ffb9b9',
};
