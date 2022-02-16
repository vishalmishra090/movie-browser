import { actionCreator, asyncActionCreator  } from '../helpers/redux';

export const actionsTypes = {
    SEARCH_MOVIES: "SEARCH_MOVIES",
    SET_SEARCH_TEXT: "SET_SEARCH_TEXT"
  };

const actions = {
    searchMovies: actionCreator(actionsTypes.SEARCH_MOVIES),
    setSearchText: actionCreator(actionsTypes.SET_SEARCH_TEXT)
}

export const asyncActionsMaps = {
    [actionsTypes.SEARCH_MOVIES]: asyncActionCreator(actionsTypes.SEARCH_MOVIES),
}
  
export default actions;