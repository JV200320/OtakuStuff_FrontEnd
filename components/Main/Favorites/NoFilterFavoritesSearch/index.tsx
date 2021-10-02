import React from 'react'
import { Search } from './styles'
import Anime from '../../../../dtos/Animes'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../store/modules/rootReducer'

interface SearchProps {
  look: string,
  setFavorites: React.Dispatch<React.SetStateAction<Anime[]>>,
  favorites: Anime[]
}

export const NoFilterFavoritesSearch: React.FC<SearchProps> = ({ look, setFavorites, favorites }) => {

  const { favorites: allFavorites } = useSelector((state: RootState) => state.auth)

  const handleSearch = (searched: string) => {
    if (searched == '') {
      setFavorites(allFavorites)
      return
    }


    let searched_favorites = searchInFavoriteAnimes(searched.toLowerCase())
    setFavorites(searched_favorites)
  }

  const searchInFavoriteAnimes = (searched: string): Anime[] => {
    let searched_favorites: Anime[] = []
    for (let i = 0; i < allFavorites.length; i++) {
      let lowerTitle = allFavorites[i].title.toLowerCase()

      if (lowerTitle.includes(searched)) {
        searched_favorites.push(allFavorites[i])
      }
    }
    return searched_favorites
  }

  return (
    <div className="w-100 d-flex justify-content-center my-3">
      <Search placeholder={`${look}`}
        onChange={e => handleSearch(e.target.value)}
      />
    </div>
  )
}
