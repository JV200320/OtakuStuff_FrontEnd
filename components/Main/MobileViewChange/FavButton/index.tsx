import React from 'react'
import { Col } from 'react-bootstrap'

export const FavButton = ({ showFav, displayFav }) => {
  return (
    <Col className={`text-center border-end border-top text-light border-dark ${displayFav[0]}`}
      onClick={() => showFav()}>
      Favoritos
    </Col>
  )
}
