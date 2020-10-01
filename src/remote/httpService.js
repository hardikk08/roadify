import * as axios from 'axios';

const BASE_URL = "http://localhost:12000";
// const REQUEST_TIMEOUT = 10000;

class httpService {
  constructor() {
    this.axiosInstance = axios.default.create({
      baseURL: BASE_URL,
      // timeout: REQUEST_TIMEOUT,
    });
  }
  
  get(path) {
    return this.axiosInstance.get(`${path}`, {withCredentials: true});
  }
  post(path, body){
    return this.axiosInstance.post(`${path}`, body, {withCredentials: true});
  }
}

export default httpService;