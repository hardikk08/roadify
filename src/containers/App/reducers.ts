import {
  SPOTIFY_TOKEN_FAILURE,
  SPOTIFY_TOKEN_SUCCESS,
  GET_USER_PROFILE_SUCCESS,
  LOGOUT_SUCCESS,
  GET_USER_PROFILE_FAILURE,
  CREATE_PLAYLIST_SUCCESS,
  GET_TOP_ARTISTS_SUCCESS
} from './constants';

const initialState = () => ({
  isLoggedIn: false,
  user: {},
  gettingLoginStatus: true,
  creationRequest: false,
  topArtists: {},
  createdPlaylist: {},
});

const app = (state = initialState(), action: any) => {
  switch(action.type) {
    case SPOTIFY_TOKEN_SUCCESS:
      return { ...state, isLoggedIn: true, gettingLoginStatus: false };
    case SPOTIFY_TOKEN_FAILURE:
      return { ...state, gettingLoginStatus: false };
    case GET_USER_PROFILE_SUCCESS:
      return { ...state, user: action.data, isLoggedIn: true, gettingLoginStatus: false };
    case GET_USER_PROFILE_FAILURE:
      return { ...state, user: {}, isLoggedIn: false, gettingLoginStatus: false };
    case LOGOUT_SUCCESS:
      return { ...state, user: {}, isLoggedIn: false };
    case CREATE_PLAYLIST_SUCCESS:
      return { ...state, createdPlaylist: action.data };
    case GET_TOP_ARTISTS_SUCCESS:
      return { ...state, creationRequest: true, topArtists: action.data.items };
    default:
      return state;
  };
};

export default app;