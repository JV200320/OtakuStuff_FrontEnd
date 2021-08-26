import Api from "../api";

const AnimeService = {
  getTopAnime: async (params) => {
    return await Api.get("/animes", {params: params})
  },
  searchAnime: async (params) => {
    return await Api.get("/animes/search", {params: params})
  }
}
export default AnimeService