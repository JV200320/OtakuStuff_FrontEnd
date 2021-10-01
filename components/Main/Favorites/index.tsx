import React from 'react'
import { Body } from '../Shared/Body'
import { NoFilterSearch } from '../Shared/NoFilterSearch'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/modules/rootReducer'
import User from '../../../dtos/User'
import { FavoriteAnimeComponent } from './FavoriteAnimeComponent'
import { ScrollableDiv } from './style'
import styles from '../styles.module.css'


export const Favorites: React.FC = () => {

  const loggedUser: null | User = useSelector((state: RootState) => state.auth)

  if (loggedUser) {
    return (
      <Body>
        <NoFilterSearch look="Animes favoritos" />
        <ScrollableDiv className={styles.hide_scrollbar}>
          {
            loggedUser.favorites.map((anime, index) => {
              return (
                <FavoriteAnimeComponent {...anime} key={index} />
              )
            })
          }
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
