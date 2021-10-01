import Api from "../api";
import { parseFavoritesToJSON } from "../helpers/parseFavorites";

const FavoriteService = {
  addToFavorite: async (id, anime_id) => {
    let res =  await Api.patch(`/interactions/favorites/${id}/add/${anime_id}`)
    let favorites = res.data.favorites
    favorites = parseFavoritesToJSON(favorites)
    return favorites
  },
  removeFromFavorite: async (id, anime_id) => {
    let res =  await Api.patch(`/interactions/favorites/${id}/remove/${anime_id}`)
    let favorites = res.data.favorites
    favorites = parseFavoritesToJSON(favorites)
    return favorites
  }
}

export default FavoriteService
