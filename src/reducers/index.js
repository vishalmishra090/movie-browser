import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import searchReducer from "./searchReducer"

const appReducer = combineReducers({
    movieReducer,
    searchReducer,
});
const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;