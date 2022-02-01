import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './Logo.module.scss';

const Logo = ({mode, enableLoading}) => {

  const handleClick = (event) => {
    const test = event.target.className.includes('selected');

    if (!test) {
      enableLoading();
    }
  };

  return (
    <NavLink
      className={(navData) => navData.isActive ? styles.[`selectedLogo-${mode}`] : styles.[`logoContainer-${mode}`] }
      to="/"
      onClick = {(event) => handleClick(event)}
    >
      Konrad Jówko
    </ NavLink>
  );};

Logo.propTypes = {
  mode: PropTypes.string,
  enableLoading: PropTypes.func,
};

export default Logo;
