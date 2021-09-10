import React from 'react'
import { Row, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FavoriteService from '../../../../../../services/favorites'
import { RootState } from '../../../../../../store/modules/rootReducer'
import { updateFavorites } from '../../../../../../store/modules/auth/reducer'

export const UnfollowButton = () => {

  const { id } = useSelector((state: RootState) => state.auth)
  const { id: anime_id } = useSelector((state: RootState) => state.contentPageToDisplay)

  const dispatch = useDispatch()

  const handleRemoveFromFavorite = async () => {
    let res = await FavoriteService.removeFromFavorite(id, anime_id)
    console.log(res)
    res.data.favorites = parseStringsInArrayToJSON(res.data.favorites)
    dispatch(updateFavorites(res.data.favorites))
  }

  const parseStringsInArrayToJSON = (favoritesStringArray) => {
    return favoritesStringArray.map(stringToParse => {
      return JSON.parse(stringToParse)
    });
  }

  return (
    <Row className="d-flex justify-content-center py-2">
      <Button className="w-50" variant='info' onClick={() => handleRemoveFromFavorite()}>
        Parar de seguir
      </Button>
    </Row>
  )
}
