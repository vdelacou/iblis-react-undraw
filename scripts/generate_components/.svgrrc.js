module.exports = {
  dimensions: false,
  svgProps: {
    className: '{ props.class }',
    width: '100%',
    height: '{ props.height }',
  },
  replaceAttrValues: {
    '#6c63ff': '{props.primarycolor}',
    '#3f3d56': '{props.accentcolor}',
    '#2f2e41': '{props.haircolor}',
    '#ffb9b9': '{props.skincolor}',
  },
  template({ template }, opts, { imports, componentName, props, jsx, exports }) {
    const typeScriptTpl = template.smart({ plugins: ['typescript'] });
    return typeScriptTpl.ast`
      import React, { SVGProps } from 'react';
      import { IIblisReactUndrawProps } from '../iblis_react_undraw_props';
      export const ${componentName} = (props: IIblisReactUndrawProps & SVGProps<SVGSVGElement>) => ${jsx};
      ${componentName}.defaultProps = {
        primarycolor: '#6c63ff',
        accentcolor: '#3f3d56',
        haircolor: '#2f2e41',
        skincolor: '#ffb9b9',
      };
    `;
  },
};
