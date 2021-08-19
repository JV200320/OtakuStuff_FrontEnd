import api from "../api";

const AnimeService = {
  getTopAnime: async (params) => {
    return await api.get("/animes", {params: params})
  }
}
export default AnimeService