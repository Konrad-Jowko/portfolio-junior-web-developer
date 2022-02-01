import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './Button.module.scss';

const Button = ({option, mode, type, enableLoading}) => {

  const handleClick = (event) => {
    const test = event.target.className.includes('selected');

    if (!test) {
      enableLoading();
    }
  };

  return (
    <NavLink
      to={option.link}
      className={(navData) => navData.isActive ? styles.[`option-${mode}-selected`]: styles.[`option-${mode}`] }
      onClick = {(event) => handleClick(event)}
    >
      <li> {option.name} </li>
    </ NavLink>
  );
};

Button.propTypes = {
  option: PropTypes.object,
  mode: PropTypes.string,
  type: PropTypes.string,
  enableLoading: PropTypes.func,
};

export default Button;
