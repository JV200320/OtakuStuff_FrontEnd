import React from 'react'
import { IAnime } from '../../../../dtos/Animes'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../store/modules/rootReducer'
import { StyledInput } from '../../../Shared/StyledInput'
import { Theme } from '../../../../styles/theme'

interface ISearchProps {
  look: string,
  setFavorites: React.Dispatch<React.SetStateAction<IAnime[]>>,
  favorites: IAnime[]
}

export const NoFilterFavoritesSearch: React.FC<ISearchProps> = ({ look, setFavorites, favorites }) => {

  const { favorites: allFavorites } = useSelector((state: RootState) => state.auth)

  const handleSearch = (searched: string) => {
    if (searched == '') {
      setFavorites(allFavorites)
      return
    }


    let searched_favorites = searchInFavoriteAnimes(searched.toLowerCase())
    setFavorites(searched_favorites)
  }

  const searchInFavoriteAnimes = (searched: string): IAnime[] => {
    let searched_favorites: IAnime[] = []
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
      <StyledInput
        width='75%'
        placeholder={`${look}`}
        onChange={e => handleSearch(e.target.value)}
        color={Theme.appColors.loggedIn}
        borderColor={Theme.appColors.loggedIn}
        shadow={Theme.appShadows.loggedIn}
      />
    </div>
  )
}
