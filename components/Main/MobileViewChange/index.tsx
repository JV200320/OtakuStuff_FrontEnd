import React from 'react'
import { Row } from 'react-bootstrap'
import { FavButton } from './FavButton'
import { FeedButton } from './FeedButton'
import { FriendsButton } from './FriendsButton'

export const MobileViewChange = (props) => {

  // Funções para troca de views
  const showFriends = () => {
    props.setDisplayFriends(props.show)
    props.setDisplayFav(props.hide)
    props.setDisplayFeed(props.hide)
  }

  const showFav = () => {
    props.setDisplayFav(props.show)
    props.setDisplayFriends(props.hide)
    props.setDisplayFeed(props.hide)
  }

  const showFeed = () => {
    props.setDisplayFeed(props.show)
    props.setDisplayFriends(props.hide)
    props.setDisplayFav(props.hide)
  }

  return (
    <Row style={{ height: 30 }}>
      <FavButton showFav={showFav} displayFav={props.displayFav} />
      <FeedButton showFeed={showFeed} displayFeed={props.displayFeed} />
      <FriendsButton showFriends={showFriends} displayFriends={props.displayFriends} />
    </Row>
  )
}
