import React from 'react';
import PropTypes from 'prop-types';

import styles from './Portfolio.module.scss';

const Portfolio = ({mode, language, contentPL, contentENG}) => {
  let content;

  if (language === 'eng') {
    content = contentENG;
  } else if (language === 'pl') {
    content = contentPL;
  }

  return (
    <div className={styles.[`portfolioContainer-${mode}`]}>
      <div className={styles.portfolioTitle}> {content.title} </div>
      <div className={styles.portfolioSubtitle1}> {content.subtitle1} </div>
      <div className={styles.portfolioSubtitle2}> {content.subtitle2} </div>
      <div className={styles.portfolioBox}>
        {content.projects.map(project => (
          <div key={project.totle} className={styles.projectContainer}>
            <div className={styles.projectTitle}> {project.title} </div>
          </div>
        ))}
      </div>
    </div>
  );
};



Portfolio.propTypes = {
  mode: PropTypes.string,
  language: PropTypes.string,
  contentENG: PropTypes.object,
  contentPL: PropTypes.object,
};

export default Portfolio;
