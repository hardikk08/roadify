import httpService from './httpService';

const httpServiceInstance = new httpService();

export const getSpotifyCode = () => {
  console.log('Api: getSpotifyCode is called...');
  return httpServiceInstance.get(`/login`)
    .then(response=>response)
    .catch(error=>error.response);
};

export const getSpotifyToken = (body) => {
  console.log('Api: getSpotifyToken is called...');
  return httpServiceInstance.post(`/token`, body)
    .then(response=>response)
    .catch(error=>error.response);
};

export const getUserProfile = () => {
  console.log('Api: getUserProfile is called...');
  return httpServiceInstance.get('/user_profile')
    .then(response=>response)
    .catch(error=>error.response);
};

export const logout = () => {
  console.log('Api: logout is called...');
  return httpServiceInstance.get('/logout')
    .then(response=>response)
    .catch(error=>error.response);
};

export const createPlaylist = (data) => {
  console.log('Api: createPlaylist is called...');
  return httpServiceInstance.post('/create_playlist', data)
    .then(response=>response)
    .catch(error=>error.response);
};

export const getTopArtists = () => {
  console.log('Api: getTopArtists is called...');
  return httpServiceInstance.get('/get_top_artists')
    .then(response=>response)
    .catch(error=>error.response);
};