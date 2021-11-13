import { ICookie } from "../../dtos/Cookies";
import {IUser} from "../../dtos/User";
import Api from "../api";
import { parseFavoritesToJSON } from "../helpers/parseFavorites";

interface IResponse {
  data: IUser
  success?: boolean
}

const AuthService = {
  signUp: async (params) => {
    let res = await Api.post<IResponse>("/auth",  params)
    let user: IUser = res.data.data
    user.favorites = parseFavoritesToJSON(user.favorites)
    return user
  },
  login: async (params) => {
    let res = await Api.post<IResponse>('/auth/sign_in', params)
    let user: IUser = res.data.data
    user.favorites = parseFavoritesToJSON(user.favorites)
    return user
  },
  validateToken: async (cookie: ICookie):Promise<IUser> => {
    Api.defaults.headers = cookie
    let res = await Api.get<IResponse>('auth/validate_token')
    let user = res.data.data
    user.favorites = parseFavoritesToJSON(user.favorites)
    return user
  }
}

export default AuthService
