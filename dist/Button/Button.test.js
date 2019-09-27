/*
import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button />, div);
  ReactDOM.unmountComponentAtNode(div);
});
*/
// __tests__/hidden-message.js
// these imports are something you'd normally configure Jest to import for you
// automatically. Learn more in the setup docs: https://testing-library.com/docs/react-testing-library/setup#cleanup
import '@testing-library/jest-dom/extend-expect'; // NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';
test('is [data-clicked="false"] before being clicked and [data-clicked="true"] after clicked', () => {
  const testMessage = 'Test Message';
  const {
    getByTestId
  } = render(React.createElement(Button, null, testMessage)); // Initial state

  expect(document.querySelector('[data-clicked="false"]')).toBeInTheDocument(); // Click da Button

  fireEvent.click(getByTestId('button')); // Check that the Button is in its clicked state

  expect(document.querySelector('[data-clicked="true"]')).toBeInTheDocument();
});