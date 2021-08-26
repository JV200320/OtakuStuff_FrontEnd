import Api from "../api";

const UserService = {
  signUp: async (params) => {
    return await Api.post("/auth",  params)
  },
  login: async (params) => {
    return await Api.post('/auth/sign_in', params)
  }
}
export default UserService
