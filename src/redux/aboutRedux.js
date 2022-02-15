import Axios from 'axios';
import { URL } from '../config';

/* SELECTORS */
export const getContent = ({about}) => about.content;
export const getLang = ({about}) => about.lang;

/* ACTION NAME CREATOR */
const reducerName = 'about';
const createActionName = name => `app/${reducerName}/${name}`;

/* ACTION TYPES */
const SET_ABOUT = createActionName('SET_ABOUT');
const SET_LANG = createActionName('SET_LANG');

/* ACTION CREATORS */
export const setAbout = payload => ({ payload, type: SET_ABOUT });
export const setLang = payload => ({ payload, type: SET_LANG });

/* THUNK CREATORS */
export const getAbout = (lang) => {
  return (dispatch) => {
    Axios
      .get(`${URL}api/about/${lang}`)
      .then(res => {
        dispatch(setLang(lang));
        dispatch(setAbout(res.data));
      })
      .catch(err => {
        console.log(err.message);
      });
  };
};

/* REDUCER */
export const reducer = (statePart = [], action = {}, state) => {
  switch (action.type) {
    case SET_ABOUT: {
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
