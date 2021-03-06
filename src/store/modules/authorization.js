import { auth } from '../../_api/api-urls'
import request from '../../_api/api-headers'

const authorationModule = {
  namespaced: true,
  state: {
    currentUser: {}
  },
  mutations: {
    setCurrentUser (state, data) {
      state.currentUser = data
    }
  },
  actions: {
    userRegistration (_, data) {
      return request().post(auth.REGISTRATION_USER, data).then((response) => {
        return response;
      })
    },
    userAuthorization (_, data) {
      return request().post(auth.AUTHORIZATION_USER, data).then((response) => {
        const userToken = response.headers.authorization;
        localStorage.setItem('token', userToken.substring(7));
        return response;
      })
    }
  }
}

export default authorationModule
