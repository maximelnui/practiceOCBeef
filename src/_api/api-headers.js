import AXIOS from 'axios'
import { setAuthorizationHeader } from './auth-helper'

const request = () => {
  const request = AXIOS.create({
    headers: {
      ...setAuthorizationHeader()
    }
  });

  request.interceptors.response.use((response) => {
    return response
  }, (error) => {
    return Promise.reject(error)
  });
  return request
};

export default request
