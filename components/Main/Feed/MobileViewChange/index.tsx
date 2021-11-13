import React, { SetStateAction } from 'react'
import { Row } from 'react-bootstrap'
import { FavoriteButton } from './FavoriteButton'
import { FeedButton } from './FeedButton'
import { FriendsButton } from './FriendsButton'

interface IProps {
  setDisplayFavorites: React.Dispatch<SetStateAction<string[]>>,
  setDisplayFeed: React.Dispatch<SetStateAction<string[]>>,
  setDisplayFriends: React.Dispatch<SetStateAction<string[]>>,
  show: string[],
  hide: string[],
  displayFavorites: string[],
  displayFeed: string[],
  displayFriends: string[]
}

export const MobileViewChange: React.FC<IProps> = (props) => {

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
    <Row style={{ height: 30 }} className='d-lg-none'>
      <FavoriteButton showFavorites={showFavorites} displayFavorites={props.displayFavorites} />
      <FeedButton showFeed={showFeed} displayFeed={props.displayFeed} />
      <FriendsButton showFriends={showFriends} displayFriends={props.displayFriends} />
    </Row>
  )
}
