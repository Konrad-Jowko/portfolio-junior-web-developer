import Axios from 'axios';
import { URL } from '../config';

/* SELECTORS */
export const getContent = ({homepage}) => homepage.content;
export const getLang = ({homepage}) => homepage.lang;

/* ACTION NAME CREATOR */
const reducerName = 'homepage';
const createActionName = name => `app/${reducerName}/${name}`;

/* ACTION TYPES */
const SET_HOMEPAGE = createActionName('SET_HOMEPAGE');
const SET_LANG = createActionName('SET_LANG');

/* ACTION CREATORS */
export const setHomepage = payload => ({ payload, type: SET_HOMEPAGE });
export const setLang = payload => ({ payload, type: SET_LANG });

/* THUNK CREATORS */
export const getHomepage = (lang) => {
  return (dispatch) => {
    Axios
      .get(`${URL}api/homepage/${lang}`)
      .then(res => {
        dispatch(setLang(lang));
        dispatch(setHomepage(res.data));
      })
      .catch(err => {
        console.log(err.message);
      });
  };
};

/* REDUCER */
export const reducer = (statePart = [], action = {}, state) => {
  switch (action.type) {
    case SET_HOMEPAGE: {
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
