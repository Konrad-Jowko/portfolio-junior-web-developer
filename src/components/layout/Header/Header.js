import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../features/Logo/LogoContainer';
import Button from '../../common/Button/ButtonContainer';
import ToggleButton from '../../common/ToggleButton/ToggleButtonContainer';
import '../../../styles/fontello/css/fontello.css';

import styles from './Header.module.scss';

/* HEADER COMPONENT, PRESENTING LOGO, NAVIGATION AND TOGGLE BUTTONS */

const Header = ({content, mode, language, contentLang, getHeader }) => {

  // If chosen language does not fit loaded language, load new language
  if (language !== contentLang) {
    getHeader(language);
  }

  if(content) {
    return (
      <div className={styles.[`headerContainer-${mode}`]} >
        <Logo />
        <ul >
          {content.map(option => (
            <Button key={option.name} option={option} />
          ))}
        </ul>
        <div className={styles.buttonsContainer}>
          <ToggleButton lang option1='EN' option2='PL'/>
          <ToggleButton twoColor option1={<i className={'icon-sun'} />} option2={<i className={'icon-moon'} />} />
        </div>
      </div>
    );
  }
  else {
    return null;
  }
};

Header.propTypes = {
  content: PropTypes.array,
  mode: PropTypes.string,
  contentLang: PropTypes.string,
  language: PropTypes.string,
  getHeader: PropTypes.func,
};

export default Header;
