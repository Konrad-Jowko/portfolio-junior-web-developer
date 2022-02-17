import React from 'react';
import PropTypes from 'prop-types';
import  Header  from '../Header/HeaderContainer';
import  LoadingScreen  from '../../common/LoadingScreen/LoadingScreenContainer';

import styles from './MainLayout.module.scss';

/* MAIN LAYOUT COMPONENT */
const MainLayout = ({children, mode, loading}) => (
  <div className={styles.[`layoutContainer-${mode}`]}>
    <Header />
    {children}
    {loading === true ? <LoadingScreen /> : null}
  </div>
);



MainLayout.propTypes = {
  children: PropTypes.node,
  loading: PropTypes.bool,
  mode: PropTypes.string,
};

export default MainLayout;
