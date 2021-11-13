import {IUser} from "../../dtos/User";
import Api from "../api";
import { parseFavoritesToJSON } from "../helpers/parseFavorites";

interface IResponse {
  results: IUser[]
}

const UserService = {
  searchUser: async (search) => {
    let res = await Api.get<IResponse>("/users/search.json", {params: search})
    let users = res.data.results
    users.forEach(user => {
      user.favorites = parseFavoritesToJSON(user.favorites)
    });
    return users
  }
}

export default UserService