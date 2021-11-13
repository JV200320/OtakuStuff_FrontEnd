import React from 'react'
import { Body } from '../Shared/Body'
import { NoFilterFavoritesSearch } from './NoFilterFavoritesSearch'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/modules/rootReducer'
import { IUser } from '../../../dtos/User'
import { FavoriteAnimeComponent } from './FavoriteAnimeComponent'
import { ScrollableDiv } from './style'
import styles from '../styles.module.css'
import { IAnime } from '../../../dtos/Animes'


export const Favorites: React.FC = () => {

  const loggedUser: null | IUser = useSelector((state: RootState) => state.auth)
  const [favorites, setFavorites] = React.useState<IAnime[]>(loggedUser?.favorites)

  React.useEffect(() => {
    setFavorites(loggedUser?.favorites)
  }, [loggedUser?.favorites])


  const renderFavorites = () => {
    const favoritesNotAvailable = !favorites

    if (favoritesNotAvailable) {
      return null
    }

    return favorites.map((anime, index) => {
      return (
        <FavoriteAnimeComponent {...anime} key={index} />
      )
    })
  }


  if (loggedUser) {
    return (
      <Body>
        <NoFilterFavoritesSearch look="Animes favoritos" setFavorites={setFavorites} favorites={favorites} />
        <ScrollableDiv className={styles.hide_scrollbar}>
          {renderFavorites()}
        </ScrollableDiv>
      </Body>
    )
  }
  return (
    <Body>
      <div className="h-100 p-2 d-flex align-items-center">
        <h1 className="text-light text-center">Entre na sua conta ou se cadastre para ter acesso aos seus favoritos.</h1>
      </div>
    </Body>
  )

}
