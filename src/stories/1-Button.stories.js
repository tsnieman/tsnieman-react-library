import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';
import { jsxDecorator } from 'storybook-addon-jsx';

export default {
  title: 'Button',

  decorators: [
    jsxDecorator, // TODO do this globally
  ],
};

export const text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

text.story = {
  decorators: [
    storyFn => <div style={{ backgroundColor: 'yellow' }}>{storyFn()}</div>,
  ],
};

export const emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

export const loading = () => (
  <Button onClick={action('clicked')} loading>
    irrelevant test
  </Button>
);
