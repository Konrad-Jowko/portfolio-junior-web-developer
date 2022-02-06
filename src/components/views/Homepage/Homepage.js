import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
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

  console.log(content);

  const setObservers = () => {
    const title = document.querySelector('[class*="homepageTitle"]');
    const subtitle = document.querySelector('[class*="homepageSubtitle"]');
    const toPortfolio = document.querySelector('[class*="toPortfolio"]');

    const sectionOptions = {
      threshold: .85,
    };

    const sectionObserver = new IntersectionObserver(function
    (entries, sectionObserver) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('hide');
        } else {
          entry.target.classList.add('hide');
        }
      });
    }, sectionOptions);

    sectionObserver.observe(title);
    sectionObserver.observe(subtitle);
    sectionObserver.observe(toPortfolio);
  };

  useEffect(() => {
    setObservers();
  }, []);

  return (
    <div className={styles.[`homepageContainer-${mode}`]}>
      <div className={styles.homepageButtons}>
        <ToggleButton lang option1='EN' option2='PL' />
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
          <NavLink to={'/Portfolio'} className={styles.toPortfolioLink}> {content.toPortfolioLink}</NavLink>
          {content.toPortfolioContent}
        </div>
        <About mode={mode} content={content.about} />
      </div>
    </div>
  );
};

Homepage.propTypes = {
  mode: PropTypes.string,
  language: PropTypes.string,
  contentENG: PropTypes.object,
  contentPL: PropTypes.object,
};

export default Homepage;
