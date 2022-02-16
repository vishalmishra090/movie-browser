import { actionsTypes } from "../actions/searchActions";
import { combineReducers } from "redux";
import { createAsyncReducer, } from "../helpers/redux";

const searchReducer = combineReducers({
    search: createAsyncReducer(actionsTypes.SEARCH_MOVIES),
    searchText: (state = "", action) => {
        switch (action.type) {
          case actionsTypes.SET_SEARCH_TEXT:
            return action.text;
          default:
            return state;
        }
      }
})

export default searchReducer