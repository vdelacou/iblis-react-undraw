import React, { SVGProps } from 'react';
import { IIblisReactUndrawProps } from '../iblis_react_undraw_props';
export const SvgAbstract = (props: IIblisReactUndrawProps & SVGProps<SVGSVGElement>) => (
  <svg
    data-name="Layer 1"
    viewBox="0 0 1095.74 664.034"
    className={props.class}
    width="100%"
    height={props.height}
    {...props}
  >
    <path fill={props.accentcolor} d="M701 661h394.74v2H701zM474 429V216h244V0H0v643h718V429H474z" />
    <path opacity={0.1} d="M718 216V0H469v213H249V0H0v216h225v213H0v214h476V429h-2V216h244z" />
    <path d="M172 0A172.004 172.004 0 010 172V0z" fill={props.primarycolor} />
    <path d="M80 0A80.004 80.004 0 010 80v44A124.004 124.004 0 00124 0z" opacity={0.1} />
    <path
      fill="#d0cde1"
      d="M718 60V29H553V0h-36v115h201V84H553V60h165zM429 331a81 81 0 10-92 80.236V525H204.236a81 81 0 100 22H337v48h22v-48h45v-22h-45V411.236A81 81 0 00429 331zM626.5 445.263l36.008 62.368L698.517 570H554.483l36.009-62.369 36.008-62.368z"
    />
    <path
      fill={props.primarycolor}
      d="M610.5 578h-72.017l36.009-62.369.25-.433-13.242-22.935-36.008 62.368L489.483 617h144.034L611 578h-.5z"
    />
    <path fill="#d0cde1" d="M159 345v-54h27v-32H52v134h134v-48h-27z" />
    <path fill={props.primarycolor} d="M89 234h50v50H89z" />
    <path
      d="M937.032 239.849l-16.544 43.723-59.664 20.935s-36-4-36 16c0 14.18 43 2 43 2l78.662-23.572 24.816-61.45z"
      fill="#ffb8b8"
    />
    <path fill={props.primarycolor} d="M635 228h234v202H635z" />
    <path fill={props.accentcolor} d="M747.5 289.263l36.008 62.368L819.517 414H675.483l36.009-62.369 36.008-62.368z" />
    <path
      fill="#d0cde1"
      d="M747.331 334.415l16.334 28.293L780 391h-65.339l16.335-28.292 16.335-28.293zM747.331 242.415l16.334 28.293L780 299h-65.339l16.335-28.292 16.335-28.293z"
    />
    <path
      d="M972.024 211.438s-16.544-2.364-24.816 28.36-10.635 33.089-10.635 33.089 48.45 7.09 49.632 4.727 10.635-59.086-14.181-66.176z"
      fill={props.haircolor}
    />
    <circle cx={962.57} cy={167.714} r={31.906} fill="#ffb8b8" />
    <path
      d="M948.39 193.712s10.635 27.18 7.09 30.724 43.723 8.272 43.723 8.272 3.546-17.725-10.635-28.36c0 0-5.909-17.727-4.727-21.272s-35.451 10.636-35.451 10.636z"
      fill="#ffb8b8"
    />
    <path
      d="M976.75 205.529a85.216 85.216 0 00-31.905 21.27c-14.181 15.363-21.271 20.09-21.271 20.09s-16.544 5.909-10.636 34.27c2.955 14.18.887 30.133-1.92 42.541a265.822 265.822 0 00-6.352 58.656v12.247s-108.718 228.071-72.084 243.434 69.72 20.089 72.084 16.544 44.905-187.893 44.905-187.893 11.818 197.346 41.36 197.346 77.994-8.272 77.994-8.272l-60.268-236.343s14.18-40.178-21.27-68.54l-4.728-12.998c19.605.01 28.567-124.07 8.272-134.716 0 0-4.726-3.545-14.18 2.364z"
      fill={props.haircolor}
    />
    <path
      d="M947.208 269.342l-16.544 43.723L871 334s-36-4-36 16c0 14.18 43 2 43 2l78.662-23.573 24.816-61.449z"
      fill="#ffb8b8"
    />
    <ellipse cx={868.624} cy={652.217} rx={20.68} ry={11.817} fill={props.haircolor} />
    <ellipse cx={1026.974} cy={652.217} rx={20.68} ry={11.817} fill={props.haircolor} />
    <path
      d="M974.887 122.971a25.341 25.341 0 00-4.892.487 21.442 21.442 0 00-9.34-2.153h-.848c-16.345 0-29.595 14.79-29.595 33.035h5.477l.884-6.732 1.297 6.732h4.562a64.576 64.576 0 00-2.119 16.55v33.624h8.28l4.795-12.458-1.199 12.458h53.223l4.358-11.325-1.09 11.325h5.993v-26.4c0-30.455-17.813-55.143-39.786-55.143z"
      fill={props.haircolor}
    />
  </svg>
);
SvgAbstract.defaultProps = {
  primarycolor: '#6c63ff',
  accentcolor: '#3f3d56',
  haircolor: '#2f2e41',
  skincolor: '#ffb9b9',
};