import React from 'react';
import PropTypes from 'prop-types';

import styles from './ToggleButton.module.scss';

/* DOUBLE BUTTON COMPONENT FOR PICKING MUTUALLY EXCLUSIVE OPTIONS */
const ToggleButton = ({option1, option2, mode, lang, language, twoColor, setMode, setLang, enableLoading}) => {
  let style, query, id1, id2, func, func2, choosableOption1, choosableOption2;

  // Options for language toggle
  if (lang) {
    style = 'lang';
    query = language === 'eng';
    id1 = 'lngOption1';
    id2 = 'lngOption2';
    choosableOption1 = 'eng';
    choosableOption2 = 'pl';
    func = setLang;
    func2 = enableLoading;
  }

  // Options for mode toggle
  if (twoColor) {
    style = 'mode';
    query = mode === 'light';
    id1 = 'tcOption1';
    id2 = 'tcOption2';
    choosableOption1 = 'light';
    choosableOption2 = 'dark';
    func = setMode;
  }

  // Handling clicking on one of the options
  const handleClick = (event, option) => {
    const pickedElement = event.target;
    let secondElement;

    if (pickedElement.getAttribute('id') === id1) {
      secondElement = document.getElementById(id2);
    } else {
      secondElement = document.getElementById(id1);
    }

    if (!pickedElement.getAttribute('class').includes('Active')) {
      const notActiveClass = pickedElement.getAttribute('class');
      const activeClass = secondElement.getAttribute('class');

      pickedElement.classList.remove(notActiveClass);
      pickedElement.classList.add(activeClass);
      secondElement.classList.remove(activeClass);
      secondElement.classList.add(notActiveClass);

      if (func2) func2();
      func(option);
    }
  };

  return (
    <div className={styles.[`container-${mode}`]} >
      <div className={query ? styles.[`${style}Active`] : styles.[style]} id={id1} onClick= {(event) => handleClick(event, choosableOption1)}>
        {option1}
      </div>

      <div className={!query ? styles.[`${style}Active`] : styles.[style]} id={id2} onClick= {(event) => handleClick(event, choosableOption2)}>
        {option2}
      </div>
    </div>
  );
};

ToggleButton.propTypes = {
  option1: PropTypes.any,
  option2: PropTypes.any,
  mode: PropTypes.string,
  language: PropTypes.string,
  lang: PropTypes.bool,
  twoColor: PropTypes.bool,
  setMode: PropTypes.func,
  setLang: PropTypes.func,
  enableLoading: PropTypes.func,
};

export default ToggleButton;
