import React from 'react'
import { useDispatch } from 'react-redux'
import Anime from '../../../../dtos/Animes'
import { setContentPageToDisplay } from '../../../../store/modules/contentPageToDisplay/reducer'
import { FavoriteAnimeDiv, ImageFilter } from './style'

interface Props extends Anime {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const FavoriteAnimeComponent: React.FC<Props> = (props) => {

  const dispatch = useDispatch()

  const displayFavoriteAnimePage = () => {
    dispatch(setContentPageToDisplay({ id: String(props.mal_id), kind: 'animes' }))
  }

  return (
    <FavoriteAnimeDiv src={props.image_url} onClick={() => displayFavoriteAnimePage()}>
      <ImageFilter>
        {props.title}
      </ImageFilter>
    </FavoriteAnimeDiv>
  )
}
