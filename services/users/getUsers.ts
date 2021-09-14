import User from "../../dtos/User";
import Api from "../api";

interface Response {
  results: User[]
}

const UserService = {
  searchUser: async (params) => {
    let res = await Api.get<Response>("/users/search", {params: params})
    let users = res.data.results
    return users
  }
}
export default UserService