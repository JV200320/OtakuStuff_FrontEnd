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
  },
  deleteAnimePost: async (comment_id: number) => {
    let res = await Api.delete(`interactions/anime/post/${comment_id}`)
    return res.data.success
  },
  editAnimePost: async (content: string, comment_id: number) => {
    let res  = await Api.patch(`interactions/anime/post/${comment_id}`, {content})
    return res.data.success
  },
  likeAnimePost: async (post_id: number) => {
    let res = await Api.post(`interactions/anime/post/like/${post_id}`)
    console.log(res)
  },
  unlikeAnimePost: async (post_id: number) => {
    let res = await Api.delete(`interactions/anime/post/like/${post_id}`)
    console.log(res)
  }
}
export default AnimePostService
