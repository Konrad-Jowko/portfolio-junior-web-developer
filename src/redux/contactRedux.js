import Axios from 'axios';
import { URL } from '../config';

/* SELECTORS */
export const getContent = ({contact}) => contact.content;
export const getLang = ({contact}) => contact.lang;

/* ACTION NAME CREATOR */
const reducerName = 'contact';
const createActionName = name => `app/${reducerName}/${name}`;

/* ACTION TYPES */
const SET_CONTACT = createActionName('SET_CONTACT');
const SET_LANG = createActionName('SET_LANG');

/* ACTION CREATORS */
export const setContact = payload => ({ payload, type: SET_CONTACT });
export const setLang = payload => ({ payload, type: SET_LANG });

/* THUNK CREATORS */
export const getContact = (lang) => {
  return (dispatch) => {
    Axios
      .get(`${URL}api/contact/${lang}`)
      .then(res => {
        dispatch(setLang(lang));
        dispatch(setContact(res.data));
      })
      .catch(err => {
        console.log(err.message);
      });
  };
};

/* REDUCER */
export const reducer = (statePart = [], action = {}, state) => {
  switch (action.type) {
    case SET_CONTACT: {
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
