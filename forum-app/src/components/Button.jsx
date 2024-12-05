import React from 'react';
import PropTypes from 'prop-types';

function Button({ label, onClick, variant = 'primary' }) {
  const baseStyles = 'px-4 py-2 rounded text-white font-medium';
  const variants = {
    primary: 'bg-primary hover:bg-blue-700',
    secondary: 'bg-secondary hover:bg-yellow-500',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`} onClick={onClick}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
};

export default Button;
