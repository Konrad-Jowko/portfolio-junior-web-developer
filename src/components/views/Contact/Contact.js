import React from 'react';
import PropTypes from 'prop-types';

import styles from './Contact.module.scss';

const Contact = ({mode, language, contentPL, contentENG}) => {
  let content;

  if (language === 'eng') {
    content = contentENG;
  } else if (language === 'pl') {
    content = contentPL;
  }

  const manageClick = (event, info) => {
    const target = event.target;
    const span = document.getElementById('copyableInfo');
    const icon = document.querySelector('.icon-mail');


    navigator.clipboard.writeText(info);

    target.classList.toggle('hide');

    setTimeout(function () {
      span.textContent = content.copied;
      icon.classList.remove('icon-mail');
      icon.classList.add('icon-ok');
      target.classList.toggle('hide');
    }, 1000);

    setTimeout(function () {
      target.classList.toggle('hide');
    }, 2000);

    setTimeout(function () {
      span.textContent = info;
      icon.classList.remove('icon-ok');
      icon.classList.add('icon-mail');
      target.classList.toggle('hide');
    }, 3000);


  };

  return (
    <div className={styles.[`contactContainer-${mode}`]}>
      <div className={styles.contactTitle}> {content.title} </div>
      <div className={styles.contactSubtitle}> {content.subtitle} </div>
      <div className={styles.contactBox}>
        {content.sections.map(section => (
          <div className={styles.sectionContainer} key={section.name}>
            <div className={styles.sectionDescription}> {section.description} </div>
            {section.type === 'link' ?
              <div className={styles.link}>
                <a target='_blank' rel='noreferrer' href={section.info}>
                  <i className={`icon-${section.icon}`} />
                </a>
              </div>
              : null}
            {section.type === 'copyable' ?
              <div className={styles.copyable} onClick={(event) => manageClick(event, section.info)}>
                <i className={`icon-${section.icon}`} />
                <span id='copyableInfo'>{section.info}</span>
              </div>
              : null}
          </div>
        ))}
      </div>
    </div>
  );
};

Contact.propTypes = {
  mode: PropTypes.string,
  language: PropTypes.string,
  contentENG: PropTypes.object,
  contentPL: PropTypes.object,
};

export default Contact;
