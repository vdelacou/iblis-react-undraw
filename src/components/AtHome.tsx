import React, { SVGProps } from 'react';
import { IIblisReactUndrawProps } from '../iblis_react_undraw_props';
export const SvgAtHome = (props: IIblisReactUndrawProps & SVGProps<SVGSVGElement>) => (
  <svg
    data-name="Layer 1"
    viewBox="0 0 840.5 427.813"
    className={props.class}
    width="100%"
    height={props.height}
    {...props}
  >
    <ellipse cx={180.872} cy={328.665} rx={29.099} ry={59.374} fill="#e6e6e6" />
    <path
      d="M183.56 425.851c-11.655-69.925-.118-139.598 0-140.293l2.267.384c-.117.692-11.588 69.999 0 139.532z"
      fill={props.accentcolor}
    />
    <path
      fill={props.accentcolor}
      d="M180.177 329.972l26.314-14.074 1.085 2.028-26.314 14.075zM152.406 324.975l1.085-2.027 26.31 14.082-1.085 2.028zM720.059 3.963h47.694v165.095h-47.694z"
    />
    <path
      fill={props.accentcolor}
      d="M799.25 138l-116-138-232.846 2.129-141.248 137.578 2.854 1.835h-1.019v286.164h487.946V141.542l.313-3.542z"
    />
    <path fill={props.primarycolor} d="M683.371.294L538.455 170.193v257.513h260.482V137.873L683.371.294z" />
    <path fill={props.accentcolor} d="M643.015 285.298h53.197v47.02h-53.197zM643.015 203.911h53.197v46.275h-53.197z" />
    <path fill="#fff" d="M643.015 285.298h53.197v47.02h-53.197zM643.015 203.911h53.197v46.275h-53.197z" />
    <path d="M502.33 419.315s1.14-23.896 24.519-21.118" fill="#e6e6e6" />
    <circle cx={495.724} cy={384.874} r={11.701} fill={props.primarycolor} />
    <path fill="#e6e6e6" d="M493.82 404.578h3.303v23.12h-3.303z" />
    <ellipse cx={110.955} cy={237.096} rx={56.915} ry={116.129} fill={props.primarycolor} />
    <path
      d="M117.295 427.001c-22.765-136.585-.23-272.673 0-274.032l2.267.384c-.23 1.356-22.698 137.077 0 273.27z"
      fill={props.accentcolor}
    />
    <path
      fill={props.accentcolor}
      d="M110.115 240.623l51.468-27.53 1.084 2.028-51.468 27.53zM55.797 228.912l1.086-2.028 51.46 27.544-1.085 2.027z"
    />
    <ellipse cx={245.754} cy={167.201} rx={77.883} ry={158.914} fill={props.primarycolor} />
    <path
      d="M254.847 427.001c-31.14-186.837-.315-372.992 0-374.85l2.267.384c-.314 1.854-31.073 187.643 0 374.089z"
      fill={props.accentcolor}
    />
    <path
      fill={props.accentcolor}
      d="M244.804 172.4l70.429-37.672 1.084 2.028-70.429 37.672zM170.474 155.628l1.085-2.028 70.42 37.69-1.086 2.028zM0 425.813h840.5v2H0zM406.602 272.821h53.197v47.02h-53.197zM406.602 191.434h53.197v46.275h-53.197z"
    />
    <path fill="#fff" d="M406.602 272.821h53.197v47.02h-53.197zM406.602 191.434h53.197v46.275h-53.197z" />
  </svg>
);
SvgAtHome.defaultProps = {
  primarycolor: '#6c63ff',
  accentcolor: '#3f3d56',
  haircolor: '#2f2e41',
  skincolor: '#ffb9b9',
};
