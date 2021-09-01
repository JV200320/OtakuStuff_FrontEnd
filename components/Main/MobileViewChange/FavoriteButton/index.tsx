import React from 'react'
import { Col } from 'react-bootstrap'

export const FavoriteButton = ({ showFav, displayFavorites }) => {
  return (
    <Col className={`text-center border-end border-top text-light border-dark ${displayFavorites[0]}`}
      onClick={() => showFav()}>
      Favoritos
    </Col>
  )
}
