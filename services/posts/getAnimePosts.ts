import { AnimePost } from "../../dtos/Posts";
import Api from "../api";

const AnimePostService = {
  getAnimePost: async (anime_id: string) => {
    let res = await Api.get(`/anime/posts/${anime_id}.json`)
    let posts: AnimePost[] = res.data.posts
    return posts
  }
}
export default AnimePostService
