import Axios from 'axios';
import { URL } from '../config';

/* SELECTORS */
export const getContent = ({header}) => header.content;
export const getLang = ({header}) => header.lang;

/* ACTION NAME CREATOR */
const reducerName = 'header';
const createActionName = name => `app/${reducerName}/${name}`;

/* ACTION TYPES */
const SET_HEADER = createActionName('SET_HEADER');
const SET_LANG = createActionName('SET_LANG');

/* ACTION CREATORS */
export const setHeader = payload => ({ payload, type: SET_HEADER });
export const setLang = payload => ({ payload, type: SET_LANG });

/* THUNK CREATORS */
export const getHeader = (lang) => {
  return (dispatch) => {
    Axios
      .get(`${URL}api/header/${lang}`)
      .then(res => {
        dispatch(setLang(lang));
        dispatch(setHeader(res.data));
      })
      .catch(err => {
        console.log(err.message);
      });
  };
};

/* REDUCER */
export const reducer = (statePart = [], action = {}, state) => {
  switch (action.type) {
    case SET_HEADER: {
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
