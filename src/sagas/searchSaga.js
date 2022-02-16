import { put, all, throttle } from "redux-saga/effects";
import { actionsTypes, asyncActionsMaps } from "../actions/searchActions";
import searchService from "../services/searchService";

function* searchMovies(action) {
  const { query, page } = action;
  const actions = asyncActionsMaps[action.type];
  yield put(actions.start({query, page}));
  try {
    const res = yield searchService.searchMovies({query, page})
    yield put(actions.success(res.data));
  } catch (e) {
    yield put(actions.set({data: null}));
    yield put(actions.error(e));
  }
}

export default function* searchSaga() {
  yield all([
    throttle(1000, actionsTypes.SEARCH_MOVIES, searchMovies)
  ]);
}