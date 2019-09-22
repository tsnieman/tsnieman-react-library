import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Button',

  decorators: [
    withKnobs,
    jsxDecorator, // TODO do this globally
  ],
};

export const plaintext = () => (
  <Button
    onClick={action('clicked')}
    disabled={boolean('Disabled', false)}
    loading={boolean('Loading', false)}
  >{text('Children', 'I am Button')}</Button>
);

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
