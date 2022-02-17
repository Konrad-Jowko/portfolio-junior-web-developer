import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './Faq.module.scss';

/* COMPONENT EXTENDING HOMEPAGE WITH ADDITIONAL INFORMATION */
const Faq = ({mode, content}) => {

  // Setting observers for component elements to perform animation based on component position
  const setObservers = () => {
    const toFaq = document.querySelector('[class*="toFaq"]');
    const redirect = document.querySelector('[class*="redirect"]');
    const titles = document.querySelectorAll('[class*="elementTitle"]');
    const subtitles = document.querySelectorAll('[class*="elementSubtitle"]');
    const contents = document.querySelectorAll('[class*="elementContent"]');
    const image = document.querySelector('img');

    const outlineOptions = {
      threshold: .35  ,
      rootMargin: '-50px',
    };

    const fadeInOptions = {
      threshold: .8,
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

    titles.forEach((section) => {
      outlineObserver.observe(section);
      fadeInObserver.observe(section);
    });

    subtitles.forEach((section) => {
      outlineObserver.observe(section);
      fadeInObserver.observe(section);
    });

    contents.forEach((section) => {
      outlineObserver.observe(section);
      fadeInObserver.observe(section);
    });

    outlineObserver.observe(toFaq);
    fadeInObserver.observe(toFaq);

    outlineObserver.observe(redirect);
    fadeInObserver.observe(redirect);

    outlineObserver.observe(image);
    fadeInObserver.observe(image);
  };

  useEffect(() => {
    setObservers();
  });

  return (
    <div className={styles.[`aboutContainer-${mode}`]}>
      <div className={styles.toFaq}>
        <span> <i className={'icon-down'} /> </span>
        {content.toFaqContent}
      </div>
      <div className={styles.aboutBox}>
        {content.aboutElements.map(element => (
          <div key={element.title} className={styles.aboutElement}>
            <div className={styles.elementTitle}>
              {element.title}
            </div>
            <div className={styles.elementSubtitle}>
              {element.subtitle}
            </div>
            <div className={styles.elementContent}>
              {element.photo ?
                <div className={styles.elementImage}> <img alt={element.photo}  src={`/images/${element.photo}`} /> </div> : null}
              {element.content}
            </div>
          </div>
        ))}
        <div className={styles.redirect}>
          {content.toPortfolio}
          <NavLink to={'/Portfolio'} className={styles.redirectButton}>
            {content.toPortfolioButton}
          </NavLink>
        </div>
      </div>
    </div>
  );};

Faq.propTypes = {
  mode: PropTypes.string,
  language: PropTypes.string,
  content: PropTypes.object,
};

export default Faq;
