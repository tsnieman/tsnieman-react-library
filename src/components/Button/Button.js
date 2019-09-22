import React from 'react';

import './Button.css';

function mergeClassNames(name, others = '') {
  if (others) return `${name} ${others}`
  return name;
};

const Button = ({
  children,
  loading,
  ...otherProps
}) => (
  <button
    {...otherProps}
    className={mergeClassNames('button', otherProps.className)}
  >
    {loading ? (
      <div className="spinner" />
    ) : children}
  </button>
);

export default Button;
