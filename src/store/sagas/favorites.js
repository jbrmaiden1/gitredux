import { call, put, select } from 'redux-saga/effects';
import api from '../../services/api';

import { addFavoriteSuccess, addFavoriteFailure } from '../actions/favorites';

export function* addFavoriteRequest(action) {
  try {
    const response = yield call(api.get, `/repos/${action.payload.repoName}`);

    const favorites = yield select(state => state.favorites.data);

    if (favorites.find(favorite => favorite.id === response.data.id)) {
      yield put(addFavoriteFailure('Repositório duplicado'));
    } else {
      yield put(addFavoriteSuccess(response.data));
    }
  } catch (err) {
    yield put(addFavoriteFailure('Repositório não existe'));
  }
}
