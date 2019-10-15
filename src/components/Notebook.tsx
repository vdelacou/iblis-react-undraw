import React, { SVGProps } from 'react';
import { IIblisReactUndrawProps } from '../iblis_react_undraw_props';
export const SvgNotebook = (props: IIblisReactUndrawProps & SVGProps<SVGSVGElement>) => (
  <svg data-name="Layer 1" viewBox="0 0 878 470" className={props.class} width="100%" height={props.height} {...props}>
    <path fill="#575a89" d="M0 0h878v470H0z" />
    <path fill="#fff" d="M39 31h376v412H39zM839 443H463V31h376z" />
    <path
      fill={props.primarycolor}
      opacity={0.2}
      d="M69 83h298v10H69zM69 123h298v10H69zM69 163h298v10H69zM494 83h298v10H494zM494 123h298v10H494zM494 163h298v10H494zM69 203h298v10H69zM69 243h298v10H69zM69 283h298v10H69zM69 323h298v10H69zM69 363h298v10H69z"
    />
  </svg>
);
SvgNotebook.defaultProps = {
  primarycolor: '#6c63ff',
  accentcolor: '#3f3d56',
  haircolor: '#2f2e41',
  skincolor: '#ffb9b9',
};
