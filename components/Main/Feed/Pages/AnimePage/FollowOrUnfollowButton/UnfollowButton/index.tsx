import React, { useState } from 'react'
import { Row, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FavoriteService from '../../../../../../../services/favorites'
import { RootState } from '../../../../../../../store/modules/rootReducer'
import { clearLoggedUser, updateFavorites } from '../../../../../../../store/modules/auth/reducer'
import { useRouter } from 'next/dist/client/router'
import { toast } from 'react-toastify'
import { StyledButton } from '../../../../../../Shared/StyledButton'
import { Theme } from '../../../../../../../styles/theme'


export const UnfollowButton = () => {

  const { id } = useSelector((state: RootState) => state.auth)
  const router = useRouter()
  const { anime_id } = router.query
  const [buttonLoading, setButtonLoading] = useState<boolean>(false)

  const dispatch = useDispatch()

  const handleRemoveFromFavorite = async () => {
    try {
      setButtonLoading(true)
      let favorites = await getUpdatedFavorites()
      dispatch(updateFavorites(favorites))
      setButtonLoading(false)
    } catch (error) {
      setButtonLoading(false)
      showToasts(error.response.data.errors)
      dispatch(clearLoggedUser())
      router.push('/Login')
    }
  }

  const getUpdatedFavorites = async () => {
    return await FavoriteService.removeFromFavorite(id, anime_id)
  }

  const showToasts = (message: string[]): void => {
    toast.error('Sua sessão expirou.')
    message.forEach(message => toast.error(message))
  }

  return (
    <Row className="d-flex justify-content-center py-2">
      <StyledButton
        width='50%'
        backgroundColor={Theme.appColors.loggedIn}
        color={'#000'}
        onClick={() => handleRemoveFromFavorite()}
        text={buttonLoading ? <Spinner animation="border" variant="light" /> : 'Parar de seguir'}
      />
    </Row>
  )
}
