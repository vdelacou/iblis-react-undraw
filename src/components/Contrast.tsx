import React, { SVGProps } from 'react';
import { IIblisReactUndrawProps } from '../iblis_react_undraw_props';
export const SvgContrast = (props: IIblisReactUndrawProps & SVGProps<SVGSVGElement>) => (
  <svg
    data-name="Layer 1"
    viewBox="0 0 912.5 703.5"
    className={props.class}
    width="100%"
    height={props.height}
    {...props}
  >
    <defs>
      <linearGradient id="Contrast_svg__a" x1={424.5} y1={675} x2={424.5} gradientUnits="userSpaceOnUse">
        <stop offset={0} stopColor="gray" stopOpacity={0.25} />
        <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
        <stop offset={1} stopColor="gray" stopOpacity={0.1} />
      </linearGradient>
      <linearGradient id="Contrast_svg__c" x1={191.5} y1={281} x2={191.5} y2={256} xlinkHref="#Contrast_svg__a" />
      <linearGradient id="Contrast_svg__b" x1={627.5} y1={281} x2={627.5} y2={256} gradientUnits="userSpaceOnUse">
        <stop offset={0} stopOpacity={0.12} />
        <stop offset={0.55} stopOpacity={0.09} />
        <stop offset={1} stopOpacity={0.02} />
      </linearGradient>
      <linearGradient id="Contrast_svg__d" x1={198} y1={328} x2={198} y2={312} xlinkHref="#Contrast_svg__a" />
      <linearGradient id="Contrast_svg__e" x1={634} y1={328} x2={634} y2={312} xlinkHref="#Contrast_svg__b" />
      <linearGradient id="Contrast_svg__f" x1={634} y1={353} x2={634} y2={337} xlinkHref="#Contrast_svg__b" />
      <linearGradient id="Contrast_svg__g" x1={634} y1={378} x2={634} y2={362} xlinkHref="#Contrast_svg__b" />
      <linearGradient id="Contrast_svg__h" x1={634} y1={403} x2={634} y2={387} xlinkHref="#Contrast_svg__b" />
      <linearGradient id="Contrast_svg__i" x1={634} y1={428} x2={634} y2={412} xlinkHref="#Contrast_svg__b" />
      <linearGradient id="Contrast_svg__j" x1={198} y1={353} x2={198} y2={337} xlinkHref="#Contrast_svg__a" />
      <linearGradient id="Contrast_svg__k" x1={198} y1={378} x2={198} y2={362} xlinkHref="#Contrast_svg__a" />
      <linearGradient id="Contrast_svg__l" x1={198} y1={403} x2={198} y2={387} xlinkHref="#Contrast_svg__a" />
      <linearGradient id="Contrast_svg__m" x1={198} y1={428} x2={198} y2={412} xlinkHref="#Contrast_svg__a" />
    </defs>
    <path fill={props.primarycolor} opacity={0.2} d="M66.5 79.5h846v624h-846z" />
    <path fill="url(#Contrast_svg__a)" d="M0 0v675h849V0H0z" />
    <path fill="#fff" d="M12 42h828v621H12z" />
    <path fill="#f5f5f5" d="M12 9h828v33H12z" />
    <circle cx={36} cy={25} r={8} fill="#ff5252" />
    <circle cx={58} cy={25} r={8} fill="#ff0" />
    <circle cx={80} cy={25} r={8} fill="#69f0ae" />
    <path fill={props.primarycolor} d="M426 42h414v621H426z" />
    <path fill="url(#Contrast_svg__c)" d="M78 256h227v25H78z" />
    <path fill="url(#Contrast_svg__b)" d="M514 256h227v25H514z" />
    <path fill={props.primarycolor} d="M82 259h220v18H82z" />
    <path fill="url(#Contrast_svg__d)" d="M47 312h302v16H47z" />
    <path fill="url(#Contrast_svg__e)" d="M483 312h302v16H483z" />
    <path fill="url(#Contrast_svg__f)" d="M483 337h302v16H483z" />
    <path fill="url(#Contrast_svg__g)" d="M483 362h302v16H483z" />
    <path fill="url(#Contrast_svg__h)" d="M483 387h302v16H483z" />
    <path fill="url(#Contrast_svg__i)" d="M483 412h302v16H483z" />
    <path fill="url(#Contrast_svg__j)" d="M47 337h302v16H47z" />
    <path fill="url(#Contrast_svg__k)" d="M47 362h302v16H47z" />
    <path fill="url(#Contrast_svg__l)" d="M47 387h302v16H47z" />
    <path fill="url(#Contrast_svg__m)" d="M47 412h302v16H47z" />
    <path
      fill={props.primarycolor}
      d="M50 314h297v11H50zM50 339h297v11H50zM50 364h297v11H50zM50 389h297v11H50zM50 414h297v11H50z"
    />
    <path
      fill="#fff"
      d="M517 259h220v18H517zM485 314h297v11H485zM485 339h297v11H485zM485 364h297v11H485zM485 389h297v11H485zM485 414h297v11H485z"
    />
  </svg>
);
SvgContrast.defaultProps = {
  primarycolor: '#6c63ff',
  accentcolor: '#3f3d56',
  haircolor: '#2f2e41',
  skincolor: '#ffb9b9',
};
