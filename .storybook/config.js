import { configure } from '@storybook/react';

configure(require.context('../stories', true, /\.stories\.(tsx?|mdx)$/), module);
