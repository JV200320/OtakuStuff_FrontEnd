import User from "../../dtos/User";
import Api from "../api";
import { parseFavoritesToJSON } from "../helpers/parseFavorites";

interface Response {
  data: User
}

const AuthService = {
  signUp: async (params) => {
    let res = await Api.post<Response>("/auth",  params)
    let user: User = res.data.data
    user.favorites = parseFavoritesToJSON(user.favorites)
    return user
  },
  login: async (params) => {
    let res = await Api.post<Response>('/auth/sign_in', params)
    let user: User = res.data.data
    user.favorites = parseFavoritesToJSON(user.favorites)
    return user
  }
}

export default AuthService
