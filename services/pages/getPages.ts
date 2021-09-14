import Page from "../../dtos/Page";
import Api from "../api";

interface PagesResponse {
  results: Page[]
}

const PageService = {
  searchPage: async (params) => {
    let res = await Api.get<PagesResponse>("/pages/search", {params: params})
    let pages = res.data.results
    return pages
  }
}
export default PageService