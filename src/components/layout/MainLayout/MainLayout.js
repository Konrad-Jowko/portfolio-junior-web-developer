import React from 'react';
import PropTypes from 'prop-types';
import  Header  from '../Header/HeaderContainer';
import  LoadingScreen  from '../../common/LoadingScreen/LoadingScreenContainer';

import styles from './MainLayout.module.scss';

const MainLayout = ({children, mode, loading, getGlobal}) => {
  if(!mode) {
    getGlobal();
  }

  return (
    <div className={styles.[`layoutContainer-${mode}`]}>
      <Header />
      {children}
      {loading === true ? <LoadingScreen /> : null}
    </div>
  );

};

MainLayout.propTypes = {
  children: PropTypes.node,
  loading: PropTypes.bool,
  mode: PropTypes.string,
  getGlobal: PropTypes.func,
};

export default MainLayout;
