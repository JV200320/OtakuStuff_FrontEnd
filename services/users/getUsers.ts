import User from "../../dtos/User";
import Api from "../api";

const UserService = {
  searchUser: async (params) => {
    let res = await Api.get<User[]>("/users/search", {params: params})
    let users = res.data
    return users
  }
}
export default UserService