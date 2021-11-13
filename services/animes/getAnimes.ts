import {IAnime} from "../../dtos/Animes";
import Api from "../api";

interface IAnimesResponse {
  animes: IAnime[]
}

interface IAnimeResponse {
  anime: IAnime
}

const AnimeService = {
  getTopAnime: async (page: string) => {
    let res =  await Api.get<IAnimesResponse>("/animes.json", {params: {page: page}})
    let animes = res.data.animes
    return animes
  },
  searchAnime: async (search) => {
    let res =  await Api.get<IAnimesResponse>("/animes/search.json", {params: {search: search}})
    let animes = res.data.animes
    return animes
  },
  getAnimePageContent: async (anime_id:string) => {
    let res = await Api.get<IAnimeResponse>(`/animes/${anime_id}.json`)
    let anime = res.data.anime
    return anime
  }
}
export default AnimeService