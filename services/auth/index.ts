import { Cookie } from "../../dtos/Cookies";
import User from "../../dtos/User";
import Api from "../api";
import { parseFavoritesToJSON } from "../helpers/parseFavorites";

interface Response {
  data: User
  success?: boolean
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
  },
  validateToken: async (cookie: Cookie):Promise<User> => {
    Api.defaults.headers = cookie
    let res = await Api.get<Response>('auth/validate_token')
    let user = res.data.data
    user.favorites = parseFavoritesToJSON(user.favorites)
    return user
  }
}

export default AuthService
