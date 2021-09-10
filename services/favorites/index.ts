import Api from "../api";

const FavoriteService = {
  addToFavorite: async (id, anime_id) => {
    return await Api.patch(`/interactions/favorites/${id}/add/${anime_id}`)
  },
  removeFromFavorite: async (id, anime_id) => {
    return await Api.patch(`/interactions/favorites/${id}/remove/${anime_id}`)
  }
}
export default FavoriteService
