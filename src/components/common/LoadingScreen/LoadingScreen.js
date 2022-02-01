import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './LoadingScreen.module.scss';

const LoadingScreen = ({mode, lang, disableLoading}) => {
  useEffect(() => {
    setTimeout(() => disableLoading(), 3000);
  }, []);

  return (
    <div className={styles.[`loadingContainer-${mode}`]}>

      {lang === 'eng' ?
        <div className={styles.[`loadingBox-${mode}`]}>
          <span> L </span>
          <span> o </span>
          <span> a </span>
          <span> d </span>
          <span> i </span>
          <span> n </span>
          <span> g </span>
          <span> . </span>
          <span> . </span>
          <span> . </span>
        </div>
        : null}

      {lang === 'pl' ?
        <div className={styles.[`loadingBox-${mode}`]}>
          <span> Ł </span>
          <span> a </span>
          <span> d </span>
          <span> o </span>
          <span> w </span>
          <span> a </span>
          <span> n </span>
          <span> i </span>
          <span> e </span>
          <span> . </span>
          <span> . </span>
          <span> . </span>
        </div>
        : null}
    </div>
  );
};

LoadingScreen.propTypes = {
  mode: PropTypes.string,
  lang: PropTypes.string,
  disableLoading: PropTypes.func,
};

export default LoadingScreen;
