import { call, takeLatest, put } from 'redux-saga/effects';
// Constant Imports
import { 
  CREATE_PLAYLIST_REQUEST,
  GET_TOP_ARTISTS_REQUEST,
  GET_USER_PROFILE_REQUEST,
  LOGOUT_REQUEST,
  SPOTIFY_CODE_REQUEST,
  SPOTIFY_TOKEN_REQUEST
} from './constants';
// Action Imports
import {
  spotifyTokenSuccess,
  spotifyTokenFailure,
  getUserProfileSuccess,
  getUserProfileFailure,
  logoutSuccess,
  getUserProfileRequest,
  createPlaylistSuccess,
  createPlaylistRequest,
  getTopArtistsSuccess,
  getTopArtistsRequest,
} from './actions';
// API Imports
import {
  getSpotifyCode,
  getSpotifyToken,
  getUserProfile,
  logout,
  createPlaylist,
  getTopArtists
} from '../../remote/api.js';

function* spotifyCodeRequestSaga(action: any) {
  try {
    const response = yield call(getSpotifyCode);
    if (response.status === 200) {
      window.location = response.data.auth_url;
    }
    else {
      console.log(response)
    }
    // var x = window.innerWidth/2 - 700/2;
    // var y = window.innerHeight/2 - 450/2;
    // window.open(response.data.auth_url, 'sharegplus','height=485,width=700,left='+x+',top='+y);
  }
  catch (err) {
    console.log(err)
  }
};

function* spotifyTokenRequestSaga(action: any) {
  try {
    const response = yield call(getSpotifyToken, action.data);
    if (response.status === 200) {
      yield put(spotifyTokenSuccess());
    }
    else {
      yield put(spotifyTokenFailure());
      console.log(response);
    }
  }
  catch(err) {
    console.log(err);
  }
};

function* getUserProfileRequestSaga(action: any) {
  try {
    const response = yield call(getUserProfile);
    switch(response.status) {
      case 200:
        yield put(getUserProfileSuccess(response.data));
        break;
      case 201:
        yield put(getUserProfileRequest());
        break;
      default:
        yield put(getUserProfileFailure());
    };
  }
  catch(err) {
    console.log(err);
  }
};

function* logoutRequestSaga(action: any) {
  try {
    const response = yield call(logout);
    if (response.status === 200) {
      yield put(logoutSuccess());
    };
  }
  catch(err) {
    console.log(err);
  }
};

function* createPlaylistRequestSaga(action: any) {
  try {
    const response = yield call(createPlaylist, action.data);
    switch(response.status) {
      case 200:
        yield put(createPlaylistSuccess(response.data));
        break;
      case 201:
        yield put(createPlaylistRequest(action.data));
        break;
      default:
        console.log("default...");
    };
  }
  catch(err) {
    console.log(err);
  }
};

function* getTopArtistsRequestSaga(action: any) {
  try {
    const response = yield call(getTopArtists);
    switch(response.status) {
      case 200:
        yield put(getTopArtistsSuccess(response.data));
        break;
      case 201:
        yield put(getTopArtistsRequest());
        break;
      default:
        console.log("default...");
    };
  }
  catch(err) {
    console.log(err);
  }
};

function* spotifyCodeRequestWatcher() {
  yield takeLatest(SPOTIFY_CODE_REQUEST, spotifyCodeRequestSaga);
};

function* spotifyTokenRequestWatcher() {
  yield takeLatest(SPOTIFY_TOKEN_REQUEST, spotifyTokenRequestSaga);
};

function* getUserProfileRequestWatcher() {
  yield takeLatest(GET_USER_PROFILE_REQUEST, getUserProfileRequestSaga);
};

function* logoutRequestWatcher() {
  yield takeLatest(LOGOUT_REQUEST, logoutRequestSaga)
};

function* createPlaylistRequestWatcher() {
  yield takeLatest(CREATE_PLAYLIST_REQUEST, createPlaylistRequestSaga);
};

function* getTopArtistsWatcher() {
  yield takeLatest(GET_TOP_ARTISTS_REQUEST, getTopArtistsRequestSaga);
}

export default {
  spotifyCodeRequestWatcher,
  spotifyTokenRequestWatcher,
  getUserProfileRequestWatcher,
  logoutRequestWatcher,
  createPlaylistRequestWatcher,
  getTopArtistsWatcher,
}