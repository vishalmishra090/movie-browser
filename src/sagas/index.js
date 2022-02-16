import { all } from 'redux-saga/effects';
import movieSaga from './movieSaga'
import searchSaga from './searchSaga';


export default function* rootSaga() {
  yield all([
    movieSaga(),
    searchSaga()
  ]);
}