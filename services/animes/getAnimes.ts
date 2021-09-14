import Anime from "../../dtos/Animes";
import Api from "../api";

interface AnimesResponse {
  animes: Anime[]
}

interface AnimeResponse {
  anime: Anime
}

const AnimeService = {
  getTopAnime: async (params) => {
    let res =  await Api.get<AnimesResponse>("/animes", {params: params})
    let animes = res.data.animes
    return animes
  },
  searchAnime: async (params) => {
    let res =  await Api.get<AnimesResponse>("/animes/search", {params: params})
    let animes = res.data.animes
    return animes
  },
  getAnimePageContent: async (anime_id:string) => {
    let res = await Api.get<AnimeResponse>(`/animes/${anime_id}`)
    let anime = res.data.anime
    return anime
  }
}
export default AnimeService