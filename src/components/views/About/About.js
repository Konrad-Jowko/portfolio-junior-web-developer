import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './About.module.scss';

/* ABOUT COMPONENT, PRESENTING SOME EXPERIENCE AND EDUCATION INFORMATION */
const About = ({mode, language, contentLang, content, getAbout, enableLoading}) => {

  // If chosen language does not fit loaded language, load new language
  if (language !== contentLang) {
    getAbout(language);
  }

  // Setting observers for component elements to perform animation based on component position
  const setObservers = () => {
    if(content) {
      const abouts = document.querySelectorAll('[class*="about"]');
      const subsections = document.querySelectorAll('[class*="subsection"]');
      const keyPoints = document.querySelectorAll('[class*="keyPoint"]');
      const sections = document.querySelectorAll('[class*="section"]');

      const outlineOptions = {
        threshold: .25  ,
        rootMargin: '-50px',
      };

      const fadeInOptions = {
        threshold: .7,
        rootMargin: '-50px',
      };

      const outlineObserver = new IntersectionObserver(function
      (entries, outlineObserver) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('showOutline');
          } else {
            entry.target.classList.remove('showOutline');
          }
        });
      }, outlineOptions);

      const fadeInObserver = new IntersectionObserver(function
      (entries, fadeInObserver) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('showWhole');
          } else {
            entry.target.classList.remove('showWhole');
          }
        });
      }, fadeInOptions);

      abouts.forEach((section) => {
        outlineObserver.observe(section);
        fadeInObserver.observe(section);
      });

      subsections.forEach((section) => {
        outlineObserver.observe(section);
        fadeInObserver.observe(section);
      });

      keyPoints.forEach((point) => {
        outlineObserver.observe(point);
        fadeInObserver.observe(point);
      });

      sections.forEach((point) => {
        outlineObserver.observe(point);
        fadeInObserver.observe(point);
      });

    }
  };

  useEffect(() => {
    setObservers();
  });

  useEffect(() => {
    enableLoading();
  }, []);

  if (content) {
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
  }
  else {
    return null;
  }
};

About.propTypes = {
  mode: PropTypes.string,
  language: PropTypes.string,
  contentLang: PropTypes.string,
  content: PropTypes.object,
  getAbout: PropTypes.func,
};

export default About;
