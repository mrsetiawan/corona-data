import axios from 'axios';

export default class ControllerBase {
  axios;
  constructor() {
    axios.interceptors.response.use(
      response => {
        console.log(response)
        return response;
      },
      error => {
        return Promise.reject(error);
      }
    );
  }

}
