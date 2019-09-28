import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Button',

  decorators: [
    withKnobs,
    jsxDecorator, // TODO do this globally
    withA11y,
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
