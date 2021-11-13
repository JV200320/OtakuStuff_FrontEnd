import { IAnimePost } from "../../dtos/Posts";
import Api from "../api";

const AnimePostService = {
  getAnimePost: async (anime_id: string) => {
    let res = await Api.get(`/anime/posts/${anime_id}.json`)
    let posts: IAnimePost[] = res.data.posts
    return posts
  },
  createAnimePost: async (anime_id: string, content: string) => {
    let res = await Api.post(`/interactions/anime/post/${anime_id}`, {content})
    return res.data.success
  }
}
export default AnimePostService
