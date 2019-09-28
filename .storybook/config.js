import { configure, addDecorator } from '@storybook/react';

import { jsxDecorator } from 'storybook-addon-jsx';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

// automatically import all files ending in *.stories.js
configure(require.context('../src/stories', true, /\.stories\.js$/), module);

// Global addons
addDecorator(jsxDecorator);
addDecorator(withKnobs);
addDecorator(withA11y);
