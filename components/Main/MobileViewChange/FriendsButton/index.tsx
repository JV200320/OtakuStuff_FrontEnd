import React from 'react'
import { Col } from 'react-bootstrap'

export const FriendsButton = ({ showFriends, displayFriends }) => {
  return (
    <Col className={`text-center border-end border-top text-light border-dark ${displayFriends[0]}`}
      onClick={() => showFriends()}>
      Amigos
    </Col>
  )
}
