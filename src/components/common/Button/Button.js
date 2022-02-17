import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './Button.module.scss';

/* BASIC BUTTON WITH NAVIGATION*/
const Button = ({option, mode, type}) => (
  <NavLink
    to={option.link}
    className={(navData) => navData.isActive ? styles.[`option-${mode}-selected`]: styles.[`option-${mode}`] }
  >
    <li> {option.name} </li>
  </ NavLink>
);

Button.propTypes = {
  option: PropTypes.object,
  mode: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
