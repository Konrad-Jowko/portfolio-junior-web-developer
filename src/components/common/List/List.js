import React from 'react';
import PropTypes from 'prop-types';

import styles from './List.module.scss';

/* RESPONSIVE LIST ELEMENT */
const List = ({mode, elements, title}) => (
  <div className={styles.[`listContainer-${mode}`]}>
    <div className={styles.listTitle}> {title} </div>
    <ul className={styles.list} >
      {elements.map(element => (
        <li key={element} className={styles.listElement}> {element} </li>
      ))}
    </ul>
  </div>
);

List.propTypes = {
  elements: PropTypes.array,
  mode: PropTypes.string,
  title: PropTypes.string,
};

export default List;
