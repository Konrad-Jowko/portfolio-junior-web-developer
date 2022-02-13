import React from 'react';
import PropTypes from 'prop-types';

import styles from './About.module.scss';

const About = ({mode, language, contentPL, contentENG}) => {
  let content;

  if (language === 'eng') {
    content = contentENG;
  } else if (language === 'pl') {
    content = contentPL;
  }

  return (
    <div className={styles.[`aboutContainer-${mode}`]}>
      <div className={styles.aboutTitle}> {content.title} </div>
      <div className={styles.aboutSubtitle1}> {content.subtitle1} </div>
      <div className={styles.aboutSubtitle2}> {content.subtitle2} </div>
      <div className={styles.aboutBox}>
        {content.sections.map(section => (
          <div className={styles.sectionContainer} key={section.title}>
            <div className={styles.sectionTitle}> {section.title} </div>
            <div className={styles.sectionDescription}> {section.description} </div>
            <div className={styles.sectionBox}>
              {section.subSections.map(subsection => (
                <div className={styles.subsectionContainer} key={subsection.name}>
                  <div className={styles.subsectionDate}> {subsection.dates} </div>
                  <div className={styles.subsectionName}> {subsection.name} </div>
                  <div className={styles.subsectionDescripion}> {subsection.description} </div>

                  {subsection.experienceKeyPoints ?
                    <div className={styles.keyPointsContainer}>
                      <div className={styles.keyPointsTitle}> {content.experienceSubtitle}</div>
                      {subsection.experienceKeyPoints.map(keyPoint => (
                        <div key={keyPoint} className={styles.keyPoint}> {keyPoint} </div>
                      ))}
                    </div>
                    : null}
                  {subsection.educationKeyPoints ?
                    <div className={styles.keyPointsContainer}>
                      <div className={styles.keyPointsTitle}> {content.educationSubtitle}</div>
                      {subsection.educationKeyPoints.map(keyPoint => (
                        <div key={keyPoint} className={styles.keyPoint}> {keyPoint} </div>
                      ))}
                    </div>
                    : null}

                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

About.propTypes = {
  mode: PropTypes.string,
  language: PropTypes.string,
  contentENG: PropTypes.object,
  contentPL: PropTypes.object,
};

export default About;
