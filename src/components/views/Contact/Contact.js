import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

import styles from './Contact.module.scss';

/* ABOUT COMPONENT, PRESENTING CONTACT INFORMATION */
const Contact = ({mode, language, contentLang, content, getContact, enableLoading}) => {

  // If chosen language does not fit loaded language, load new language
  if (language !== contentLang) {
    getContact(language);
  }

  // Manage click animation on copyable element
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
    }, 500);

    setTimeout(function () {
      target.classList.toggle('hide');
    }, 1500);

    setTimeout(function () {
      span.textContent = info;
      icon.classList.remove('icon-ok');
      icon.classList.add('icon-mail');
      target.classList.toggle('hide');
    }, 2000);
  };

  useEffect(() => {
    enableLoading();
  }, []);

  if (content) {
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
  }
  else {
    return null;
  }
};

Contact.propTypes = {
  mode: PropTypes.string,
  language: PropTypes.string,
  contentLang: PropTypes.string,
  content: PropTypes.object,
  getContact: PropTypes.func,
};

export default Contact;
