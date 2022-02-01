import React from 'react';
import PropTypes from 'prop-types';

import styles from './About.module.scss';

const About = ({mode, content}) => {

  console.log(content);

  return (
    <div className={styles.[`aboutContainer-${mode}`]}>
      <div className={styles.toAbout}>
        <span> <i className={'icon-down'} /> </span>
        {content.toAboutContent}
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
          </div>
        ))}
      </div>
    </div>
  );};

About.propTypes = {
  mode: PropTypes.string,
  language: PropTypes.string,
  content: PropTypes.object,
};

export default About;
