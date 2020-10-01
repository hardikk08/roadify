import { all } from 'redux-saga/effects';
import app from '../containers/App/sagas';

export default function* rootSagas() {
  yield all([
    app.spotifyCodeRequestWatcher(),
    app.spotifyTokenRequestWatcher(),
    app.getUserProfileRequestWatcher(),
    app.logoutRequestWatcher(),
    app.createPlaylistRequestWatcher(),
    app.getTopArtistsWatcher(),
  ]);
};