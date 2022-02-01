import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './ToggleButton.module.scss';

const ToggleButton = ({option1, option2, mode, lang, language, twoColor, setDarkMode, setLightMode, setENG, setPL, enableLoading}) => {
  let style, query, id1, id2, func1, func2, func3;

  if (lang) {
    style = 'lang';
    query = language === 'eng';
    id1 = 'lngOption1';
    id2 = 'lngOption2';
    func1 = setENG;
    func2 = setPL;
    func3 = enableLoading;
  }
  if (twoColor) {
    style = 'mode';
    query = mode === 'light';
    id1 = 'tcOption1';
    id2 = 'tcOption2';
    func1 = setLightMode;
    func2 = setDarkMode;
  }

  const handleClick = (event, func) => {
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

      if (func3) func3();
      func();
    }
  };

  return (
    <div className={styles.[`container-${mode}`]} >
      <div className={query ? styles.[`${style}Active`] : styles.[style]} id={id1} onClick= {(event) => handleClick(event, func1)}>
        {option1}
      </div>

      <div className={!query ? styles.[`${style}Active`] : styles.[style]} id={id2} onClick= {(event) => handleClick(event, func2)}>
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
  setDarkMode: PropTypes.func,
  setLightMode: PropTypes.func,
  setENG: PropTypes.func,
  setPL: PropTypes.func,
  enableLoading: PropTypes.func,
};

export default ToggleButton;
