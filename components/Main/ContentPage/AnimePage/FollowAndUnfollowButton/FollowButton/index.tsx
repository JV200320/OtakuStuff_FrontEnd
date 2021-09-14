import React, { useState } from 'react'
import { Row, Button, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FavoriteService from '../../../../../../services/favorites'
import { RootState } from '../../../../../../store/modules/rootReducer'
import { updateFavorites } from '../../../../../../store/modules/auth/reducer'

export const FollowButton = () => {

  const { id } = useSelector((state: RootState) => state.auth)
  const { id: anime_id } = useSelector((state: RootState) => state.contentPageToDisplay)
  const [buttonLoading, setButtonLoading] = useState<boolean>(false)

  const dispatch = useDispatch()

  const handleAddToFavorite = async () => {
    setButtonLoading(true)
    let res = await FavoriteService.addToFavorite(id, anime_id)
    res.data.favorites = parseStringsInArrayToJSON(res.data.favorites)
    dispatch(updateFavorites(res.data.favorites))
    setButtonLoading(false)
  }

  const parseStringsInArrayToJSON = (favoritesStringArray) => {
    return favoritesStringArray.map(stringToParse => {
      return JSON.parse(stringToParse)
    });
  }

  return (
    <Row className="d-flex justify-content-center py-2">
      <Button className="w-50" variant='info' onClick={() => handleAddToFavorite()}>
        {
          buttonLoading
            ?
            <Spinner animation="border" variant="light" />
            :
            'Seguir'
        }
      </Button>
    </Row>
  )
}
