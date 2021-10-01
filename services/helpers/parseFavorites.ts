export const parseFavoritesToJSON = (favorites) => {
  return favorites.map((string) => {
    return JSON.parse(string)
  })
}
