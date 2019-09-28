import React from 'react';

import './Button.css';

function mergeClassNames(name, others = '') {
  if (others) return `${name} ${others}`
  return name;
};

const Button = ({
  children,
  loading,
  variant = 'default',
  ...otherProps
}) => {
  const [clicked, setClicked] = React.useState(false);

  return (
    <button
      data-testid="button"
      onClick={() => setClicked(true)}
      data-variant={variant}
      {...otherProps}
      className={mergeClassNames('button', otherProps.className)}
      data-clicked={clicked}
    >
      {loading ? (
        <div className="spinner" />
      ) : children}
    </button>
  );
};

export default Button;
