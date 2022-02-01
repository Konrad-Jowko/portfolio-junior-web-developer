import React from 'react';
import PropTypes from 'prop-types';
import ToggleButton from '../../common/ToggleButton/ToggleButtonContainer';
import About from '../../features/About/About';

import styles from './Homepage.module.scss';

const Homepage = ({mode, language, contentPL, contentENG}) => {
  let content;

  if (language === 'eng') {
    content = contentENG;
  } else if (language === 'pl') {
    content = contentPL;
  }

  return (
    <div className={styles.[`homepageContainer-${mode}`]}>
      <div className={styles.homepageButtons}>
        <ToggleButton lang option1='EN' option2='PL'/>
        <ToggleButton twoColor option1={<i className={'icon-sun'} />} option2={<i className={'icon-moon'} />} />
      </div>
      <div className={styles.homepageBox}>
        <div className={styles.homepageTitle}> {content.hi} <br /> {content.introduction}</div>
        <div className={styles.homepageSubtitle}>
          {content.subtitle}
          <span className={styles.highlight}> {content.position} </span>
        </div>
        <div className={styles.toPortfolio}>
          {content.toPortfolioClick}
          <span className={styles.highlight}> {content.toPortfolioLink}</span>
          {content.toPortfolioContent}
        </div>
        <About mode={mode} content={content.about} />
      </div>
    </div>
  );};

Homepage.propTypes = {
  mode: PropTypes.string,
  language: PropTypes.string,
  contentENG: PropTypes.object,
  contentPL: PropTypes.object,
};

export default Homepage;
