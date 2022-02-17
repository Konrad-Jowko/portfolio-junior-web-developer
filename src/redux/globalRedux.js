/* SELECTORS */
export const getMode = ({global}) => global.mode;
export const getLanguage = ({global}) => global.language;
export const getLoading = ({global}) => global.loading;

/* ACTION NAME CREATOR */
const reducerName = 'global';
const createActionName = name => `app/${reducerName}/${name}`;

/* ACTION TYPES */
const SET_MODE = createActionName('SET_MODE');
const SET_LANG = createActionName('SET_LANG');
const ENABLE_LOADING = createActionName('ENABLE_LOADING');
const DISABLE_LOADING = createActionName('DISABLE_LOADING');

/* ACTION CREATORS */
export const setMode = payload => ({ payload, type: SET_MODE });
export const setLang = payload => ({ payload, type: SET_LANG });
export const enableLoading = payload => ({ payload, type: ENABLE_LOADING });
export const disableLoading = payload => ({ payload, type: DISABLE_LOADING });

/* REDUCER */
export const reducer = (statePart = [], action = {}, state) => {
  switch (action.type) {
    case SET_MODE: {
      return {
        ...statePart,
        mode: action.payload,
      };
    }
    case SET_LANG: {
      return {
        ...statePart,
        language: action.payload,
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
