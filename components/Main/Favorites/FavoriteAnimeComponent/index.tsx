import React from 'react'
import Anime from '../../../../dtos/Animes'

export const FavoriteAnimeComponent: React.FC<Anime> = (props) => {
  return (
    <div>
      {props.title}
    </div>
  )
}
