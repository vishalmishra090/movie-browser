import { put, takeLatest, all } from "redux-saga/effects";
import { actionsTypes, asyncActionsMaps } from "../actions/movieActions";
import movieService from "../services/movieService";

function* getMovies(action) {
  const actions = asyncActionsMaps[action.type];
  const request = {
    page: action.page,
    filter: action.filter
  }
  yield put(actions.start(request));
  try {
    const res = yield movieService.getMovies(request);
    yield put(actions.success(res.data));
  } catch (e) {
    yield put(actions.set({data: null}));
    yield put(actions.error(e));
  }
}

function* getMovie(action) {
  const { id } = action;
  const actions = asyncActionsMaps[action.type];
  yield put(actions.start());
  try {
      const res = yield movieService.getMovie({id})
      yield put(actions.success(res.data));
  } catch (e) {
      yield put(actions.set({data: null}));
      yield put(actions.error(e))
  }
}

function* getCredits(action) {
  const { id } = action;
  const actions = asyncActionsMaps[action.type];
  yield put(actions.start());
  try {
      const res = yield movieService.getCredits({id})
      yield put(actions.success(res.data));
  } catch (e) {
      yield put(actions.set({data: null}));
      yield put(actions.error(e))
  }
}

export default function* movieSaga() {
  yield all([
    takeLatest(actionsTypes.GET_MOVIES, getMovies),
    takeLatest(actionsTypes.GET_MOVIE, getMovie),
    takeLatest(actionsTypes.GET_CREDITS, getCredits),
  ]);
}
