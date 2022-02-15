import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import List from '../../common/List/List';
import Carousel from '../../common/Carousel/Carousel';

import styles from './Portfolio.module.scss';

const Portfolio = ({mode, language, contentLang, content, getPortfolio}) => {
  if (language !== contentLang) {
    getPortfolio(language);
  }

  const setObservers = () => {
    const projects = document.querySelectorAll('[class*="projectContainer"]');

    const sectionOptions = {
      threshold: .1,
    };

    const projectObserver = new IntersectionObserver(function
    (entries, projectObserver) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('hide');
          entry.target.classList.add('show');
        } else {
          entry.target.classList.add('hide');
          entry.target.classList.remove('show');
        }
      });
    }, sectionOptions);

    projects.forEach((section) => {
      projectObserver.observe(section);
    });
  };

  useEffect(() => {
    setObservers();
  });

  if (content) {
    return (
      <div className={styles.[`portfolioContainer-${mode}`]}>
        <div className={styles.portfolioTitle}> {content.title} </div>
        <div className={styles.portfolioSubtitle1}> {content.subtitle1} </div>
        <div className={styles.portfolioSubtitle2}> {content.subtitle2} </div>
        <div className={styles.portfolioBox}>
          {content.projects.map(project => (
            <div key={project.title} className={styles.projectContainer}>
              <div className={styles.projectTitle}> {project.title} </div>
              <div className={styles.projectDescription}> {project.description} </div>
              <div className={styles.detailsContainer}>
                <List mode={mode} title={content.technologyTitle} elements={project.technologies} />
                {project.images ?
                  <Carousel images={project.images} mode={mode} />
                  : null }
              </div>
              <div className={styles.detailsContainer}>
                <div className={styles.detail}>
                  <div className={styles.detailTitle}> {content.favouriteTitle} </div>
                  <div className={styles.detailContent}> {project.favourite} </div>
                </div>
                <div className={styles.detail}>
                  <div className={styles.detailTitle}> {content.learnedTitle} </div>
                  <div className={styles.detailContent}> {project.learned} </div>
                </div>
              </div>
              <div className={styles.detailsContainer}>
                <div className={styles.detail}>
                  <div className={styles.detailTitle}> {content.gitTitle} </div>
                  <div className={styles.detailLink}>
                    <a target='_blank' rel='noreferrer' href={project.gitLink}>{content.buttonContent}</a>
                  </div>
                </div>
                {project.projectLink ?
                  <div className={styles.detail}>
                    <div className={styles.detailTitle}> {content.linkTitle} </div>
                    <div className={styles.detailLink}>
                      <a target='_blank' rel='noreferrer' href={project.projectLink}>{content.buttonContent}</a>
                    </div>
                    <span className={styles.warning}> {content.linkWarning} </span>
                  </div>
                  : null
                }
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



Portfolio.propTypes = {
  mode: PropTypes.string,
  language: PropTypes.string,
  contentLang: PropTypes.string,
  content: PropTypes.object,
  getPortfolio: PropTypes.func,
};

export default Portfolio;
