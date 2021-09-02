import Api from "../api";

const PageService = {
  searchPage: async (params) => {
    return await Api.get("/pages/search", {params: params})
  }
}
export default PageService