import Axios from 'axios';

/* SELECTORS */
export const getPL = ({about}) => about.pl;
export const getENG= ({about}) => about.eng;

/* ACTION NAME CREATOR */
const reducerName = 'about';
const createActionName = name => `app/${reducerName}/${name}`;

/* ACTION TYPES */
const START_FETCH = createActionName('START_FETCH');
const FINISH_FETCH = createActionName('FINISH_FETCH');

/* ACTION CREATORS */
export const startFetch = payload => ({ payload, type: START_FETCH });
export const finishFetch = payload => ({ payload, type: FINISH_FETCH });

/* THUNK CREATORS */

/* REDUCER */
export const reducer = (statePart = [], action = {}, state) => {
  switch (action.type) {
    case START_FETCH: {
      return {
        ...statePart,
        fetch: true,
      };
    }
    case FINISH_FETCH: {
      return {
        ...statePart,
        mode: false,
      };
    }
    default:
      return statePart;
  }
};
