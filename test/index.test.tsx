import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import { Svg3DModeling } from '../src';

export const BasicUsage: FunctionComponent = () => {
  return <Svg3DModeling accentcolor={'red'} primarycolor={'blue'} haircolor={'pink'} skincolor={'green'} />;
};

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BasicUsage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
