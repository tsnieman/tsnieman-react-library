function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import './Button.css';

function mergeClassNames(name, others = '') {
  if (others) return `${name} ${others}`;
  return name;
}

;

const Button = ({
  children,
  loading,
  ...otherProps
}) => {
  const [clicked, setClicked] = React.useState(false);
  return React.createElement("button", _extends({
    "data-testid": "button",
    onClick: () => setClicked(true)
  }, otherProps, {
    className: mergeClassNames('button', otherProps.className),
    "data-clicked": clicked
  }), loading ? React.createElement("div", {
    className: "spinner"
  }) : children);
};

export default Button;