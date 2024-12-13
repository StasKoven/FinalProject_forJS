import React from 'react';
import PropTypes from 'prop-types';

function Button({ label, onClick, variant = 'primary' }) {
  const variantClass = variant === 'secondary' ? 'button-secondary' : 'button-primary';

  return (
    <button className={`button ${variantClass}`} onClick={onClick}>
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