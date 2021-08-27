import Api from "../api";

const UserService = {
  searchUser: async (params) => {
    return await Api.get("/users/search", {params: params})
  }
}
export default UserService