import Axios from 'axios';

/* SELECTORS */
export const getMode = ({global}) => global.mode;
export const getLanguage = ({global}) => global.language;
export const getLoading = ({global}) => global.loading;

/* ACTION NAME CREATOR */
const reducerName = 'global';
const createActionName = name => `app/${reducerName}/${name}`;

/* ACTION TYPES */
const SET_DARK_MODE = createActionName('SET_DARK_MODE');
const SET_LIGHT_MODE = createActionName('SET_LIGHT_MODE');
const SET_ENG = createActionName('SET_ENG');
const SET_PL = createActionName('SET_PL');
const ENABLE_LOADING = createActionName('ENABLE_LOADING');
const DISABLE_LOADING = createActionName('DISABLE_LOADING');

/* ACTION CREATORS */
export const setDarkMode = payload => ({ payload, type: SET_DARK_MODE });
export const setLightMode = payload => ({ payload, type: SET_LIGHT_MODE });
export const setENG = payload => ({ payload, type: SET_ENG });
export const setPL = payload => ({ payload, type: SET_PL });
export const enableLoading = payload => ({ payload, type: ENABLE_LOADING });
export const disableLoading = payload => ({ payload, type: DISABLE_LOADING });


/* THUNK CREATORS */


/* REDUCER */
export const reducer = (statePart = [], action = {}, state) => {
  switch (action.type) {
    case SET_DARK_MODE: {
      return {
        ...statePart,
        mode: 'dark',
      };
    }
    case SET_LIGHT_MODE: {
      return {
        ...statePart,
        mode: 'light',
      };
    }
    case SET_ENG: {
      return {
        ...statePart,
        language: 'eng',
      };
    }
    case SET_PL: {
      return {
        ...statePart,
        language: 'pl',
      };
    }
    case ENABLE_LOADING: {
      return {
        ...statePart,
        loading: true,
      };
    }
    case DISABLE_LOADING: {
      return {
        ...statePart,
        loading: false,
      };
    }
    default:
      return statePart;
  }
};
