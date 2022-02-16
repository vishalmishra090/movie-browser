import { actionsTypes } from "../actions/movieActions";
import { combineReducers } from "redux";
import { createAsyncReducer, } from "../helpers/redux";

const movieReducer = combineReducers({
    movies: createAsyncReducer(actionsTypes.GET_MOVIES),
    movie: createAsyncReducer(actionsTypes.GET_MOVIE),
    credits: createAsyncReducer(actionsTypes.GET_CREDITS),
})

export default movieReducer