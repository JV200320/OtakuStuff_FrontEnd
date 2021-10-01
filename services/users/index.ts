import User from "../../dtos/User";
import Api from "../api";
import { parseFavoritesToJSON } from "../helpers/parseFavorites";

interface Response {
  results: User[]
}

const UserService = {
  searchUser: async (search) => {
    let res = await Api.get<Response>("/users/search", {params: search})
    let users = res.data.results
    users.forEach(user => {
      user.favorites = parseFavoritesToJSON(user.favorites)
    });
    return users
  }
}

export default UserService