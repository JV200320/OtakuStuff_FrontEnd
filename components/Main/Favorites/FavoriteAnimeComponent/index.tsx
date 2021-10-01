import { useRouter } from 'next/dist/client/router'
import React from 'react'
import Anime from '../../../../dtos/Animes'
import { FavoriteAnimeDiv, ImageFilter } from './style'


export const FavoriteAnimeComponent: React.FC<Anime> = ({ image_url, title, mal_id }) => {

  const router = useRouter()

  const displayFavoriteAnimePage = () => {
    router.push(`/anime/${mal_id}`)
  }

  return (
    <FavoriteAnimeDiv src={image_url} onClick={() => displayFavoriteAnimePage()}>
      <ImageFilter>
        {title}
      </ImageFilter>
    </FavoriteAnimeDiv>
  )
}
