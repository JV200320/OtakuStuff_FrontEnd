import { ILike } from "./Likes";

export interface IAnimePost {
  anime_id: number,
  content: string,
  created_at: string,
  updated_at: string,
  id: number,
  kind: string,
  user_id: number,
  user_nickname: string,
  user_image_url: string,
  likes: ILike[],
  replies: number
}
