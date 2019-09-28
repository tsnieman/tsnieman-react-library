import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';
import { text, boolean, select } from '@storybook/addon-knobs';

import '../Theme.css';
import '../App.css';
import '../components/Button/Button.css';

export default {
  title: 'Button',
};

const variants = {
  default: 'default',
  primary: 'primary',
  secondary: 'secondary',
  outline: 'outline',
};

export const plaintext = () => (
  <Button
    onClick={action('clicked')}
    disabled={boolean('Disabled', false)}
    loading={boolean('Loading', false)}
    variant={select('Variant', variants, 'default')}
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
