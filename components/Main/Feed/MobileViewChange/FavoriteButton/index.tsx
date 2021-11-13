import React from 'react'
import { Col } from 'react-bootstrap'

interface IProps {
  showFavorites: () => void,
  displayFavorites: string[]
}

export const FavoriteButton: React.FC<IProps> = ({ showFavorites, displayFavorites }) => {
  return (
    <Col className={`text-center border-end border-top text-light border-dark ${displayFavorites[0]}`}
      onClick={() => showFavorites()}>
      Favoritos
    </Col>
  )
}
