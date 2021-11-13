import {IPage} from "../../dtos/Page";
import Api from "../api";

interface IPagesResponse {
  results: IPage[]
}

const PageService = {
  searchPage: async (params) => {
    let res = await Api.get<IPagesResponse>("/pages/search.json", {params: params})
    let pages = res.data.results
    return pages
  }
}
export default PageService