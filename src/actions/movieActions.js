import { actionCreator, asyncActionCreator  } from '../helpers/redux';

export const actionsTypes = {
    GET_MOVIES: "GET_MOVIES",
    GET_MOVIE: "GET_MOVIE",
    GET_CREDITS: "GET_CREDITS",
  };

const actions = {
    getMovies: actionCreator(actionsTypes.GET_MOVIES),
    getMovie: actionCreator(actionsTypes.GET_MOVIE),
    getCredits: actionCreator(actionsTypes.GET_CREDITS),
}

export const asyncActionsMaps = {
    [actionsTypes.GET_MOVIES]: asyncActionCreator(actionsTypes.GET_MOVIES),
    [actionsTypes.GET_MOVIE]: asyncActionCreator(actionsTypes.GET_MOVIE),
    [actionsTypes.GET_CREDITS]: asyncActionCreator(actionsTypes.GET_CREDITS),
}
  
export default actions;