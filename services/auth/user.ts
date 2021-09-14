import User from "../../dtos/User";
import Api from "../api";

interface Response {
  data: User
}

const UserService = {
  signUp: async (params) => {
    let res = await Api.post<Response>("/auth",  params)
    let user: User = res.data.data
    return user
  },
  login: async (params) => {
    let res = await Api.post<Response>('/auth/sign_in', params)
    let user: User = res.data.data
    return user
  }
}
export default UserService
