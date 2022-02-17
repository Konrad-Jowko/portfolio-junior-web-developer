import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './Logo.module.scss';

/* WEBSITE LOGO COMPONENT */
const Logo = ({mode, enableLoading}) => (
  <NavLink
    className={(navData) => navData.isActive ? styles.[`selectedLogo-${mode}`] : styles.[`logoContainer-${mode}`] }
    to="/"
  >
    Konrad Jówko
  </ NavLink>
);

Logo.propTypes = {
  mode: PropTypes.string,
  enableLoading: PropTypes.func,
};

export default Logo;
