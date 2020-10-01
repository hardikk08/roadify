import { 
  SPOTIFY_CODE_REQUEST,
  SPOTIFY_CODE_SUCCESS,
  SPOTIFY_CODE_FAILURE,
  SPOTIFY_TOKEN_REQUEST,
  SPOTIFY_TOKEN_FAILURE,
  SPOTIFY_TOKEN_SUCCESS,
  GET_USER_PROFILE_REQUEST,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS, CREATE_PLAYLIST_REQUEST, CREATE_PLAYLIST_SUCCESS, GET_TOP_ARTISTS_REQUEST, GET_TOP_ARTISTS_SUCCESS
} from './constants';

export function spotifyCodeRequest() {
  return {
    type: SPOTIFY_CODE_REQUEST,
  };
};

export function spotifyCodeSuccess() {
  return {
    type: SPOTIFY_CODE_SUCCESS,
  };
};

export function spotifyCodeFailure() {
  return {
    type: SPOTIFY_CODE_FAILURE,
  };
};

export function spotifyTokenRequest(data: object) {
  return {
    type: SPOTIFY_TOKEN_REQUEST,
    data
  };
};

export function spotifyTokenSuccess() {
  return {
    type: SPOTIFY_TOKEN_SUCCESS
  };
};

export function spotifyTokenFailure() {
  return {
    type: SPOTIFY_TOKEN_FAILURE
  };
};

export function getUserProfileRequest() {
  return {
    type: GET_USER_PROFILE_REQUEST
  };
};

export function getUserProfileSuccess(data: object) {
  return {
    type: GET_USER_PROFILE_SUCCESS,
    data,
  };
};

export function getUserProfileFailure() {
  return {
    type: GET_USER_PROFILE_FAILURE,
  };
};

export function logoutRequest() {
  return {
    type: LOGOUT_REQUEST,
  };
};

export function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS,
  };
};

export function createPlaylistRequest(data: object) {
  return {
    type: CREATE_PLAYLIST_REQUEST,
    data
  };
};

export function createPlaylistSuccess(data: object) {
  return {
    type: CREATE_PLAYLIST_SUCCESS,
    data
  };
};

export function getTopArtistsRequest() {
  return {
    type: GET_TOP_ARTISTS_REQUEST,
  };
};

export function getTopArtistsSuccess(data: object) {
  return {
    type: GET_TOP_ARTISTS_SUCCESS,
    data,
  };
};