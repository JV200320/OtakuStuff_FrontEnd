import api from "../api";

const AnimeService = {
  getTopAnime: async (params) => {
    return await api.get("/animes", {params: params})
  },
  searchAnime: async (params) => {
    return await api.get("/animes/search", {params: params})
  }
}
export default AnimeService