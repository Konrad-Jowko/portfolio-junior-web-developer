import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Logo from '../../features/Logo/LogoContainer';
import Button from '../../common/Button/ButtonContainer';
import ToggleButton from '../../common/ToggleButton/ToggleButtonContainer';
import '../../../styles/fontello/css/fontello.css';

import styles from './Header.module.scss';

const Header = ({elementsPL, elementsENG, mode, language }) => {
  let options;

  if (language === 'eng') options = elementsENG;
  else if (language === 'pl') options = elementsPL;

  return (
    <div className={styles.[`headerContainer-${mode}`]} >
      <Logo />
      <ul >
        {options.map(option => (
          <Button key={option.name} option={option} />
        ))}
      </ul>
      <div className={styles.buttonsContainer}>
        <ToggleButton lang option1='EN' option2='PL'/>
        <ToggleButton twoColor option1={<i className={'icon-sun'} />} option2={<i className={'icon-moon'} />} />
      </div>
    </div>
  );
};

Header.propTypes = {
  elementsPL: PropTypes.array,
  elementsENG: PropTypes.array,
  mode: PropTypes.string,
  language: PropTypes.string,
};

export default Header;
