import React from 'react'
import { Row } from 'react-bootstrap'
import { FavoriteButton } from './FavoriteButton'
import { FeedButton } from './FeedButton'
import { FriendsButton } from './FriendsButton'

export const MobileViewChange = (props) => {

  // Funções para troca de views
  const showFriends = () => {
    props.setDisplayFriends(props.show)
    props.setDisplayFavorites(props.hide)
    props.setDisplayFeed(props.hide)
  }

  const showFavorites = () => {
    props.setDisplayFavorites(props.show)
    props.setDisplayFriends(props.hide)
    props.setDisplayFeed(props.hide)
  }

  const showFeed = () => {
    props.setDisplayFeed(props.show)
    props.setDisplayFriends(props.hide)
    props.setDisplayFavorites(props.hide)
  }

  return (
    <Row style={{ height: 30 }}>
      <FavoriteButton showFav={showFavorites} displayFavorites={props.displayFavorites} />
      <FeedButton showFeed={showFeed} displayFeed={props.displayFeed} />
      <FriendsButton showFriends={showFriends} displayFriends={props.displayFriends} />
    </Row>
  )
}
