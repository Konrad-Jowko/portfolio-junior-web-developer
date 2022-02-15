import Axios from 'axios';
import { URL } from '../config';

/* SELECTORS */
export const getContent = ({portfolio}) => portfolio.content;
export const getLang = ({portfolio}) => portfolio.lang;

/* ACTION NAME CREATOR */
const reducerName = 'portfolio';
const createActionName = name => `app/${reducerName}/${name}`;

/* ACTION TYPES */
const SET_PORTFOLIO = createActionName('SET_PORTFOLIO');
const SET_LANG = createActionName('SET_LANG');

/* ACTION CREATORS */
export const setPortfolio = payload => ({ payload, type: SET_PORTFOLIO });
export const setLang = payload => ({ payload, type: SET_LANG });

/* THUNK CREATORS */

export const getPortfolio = (lang) => {
  return (dispatch) => {
    Axios
      .get(`${URL}api/portfolio/${lang}`)
      .then(res => {
        dispatch(setLang(lang));
        dispatch(setPortfolio(res.data));
      })
      .catch(err => {
        console.log(err.message);
      });
  };
};

/* REDUCER */
export const reducer = (statePart = [], action = {}, state) => {
  switch (action.type) {
    case SET_PORTFOLIO: {
      return {
        ...statePart,
        content: action.payload,
      };
    }
    case SET_LANG: {
      return {
        ...statePart,
        lang: action.payload,
      };
    }
    default:
      return statePart;
  }
};
