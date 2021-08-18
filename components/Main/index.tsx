import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Favorites } from './Favorites'
import { Friends } from './Friends'

export const Main = () => {

  // Aparece ou não
  const show = ['d-none', '']
  const hide = ['d-block d-sm-block d-lg-none', 'd-none d-lg-flex']

  // Estados que controlam qual view apresentar
  const [displayFav, setDisplayFav] = React.useState(hide)
  const [displayFriends, setDisplayFriends] = React.useState(hide)
  const [displayFeed, setDisplayFeed] = React.useState(show)

  // Funções para troca de views
  const showFriends = () => {
    setDisplayFriends(show)
    setDisplayFav(hide)
    setDisplayFeed(hide)
  }

  const showFav = () => {
    setDisplayFav(show)
    setDisplayFriends(hide)
    setDisplayFeed(hide)
  }

  const showFeed = () => {
    setDisplayFeed(show)
    setDisplayFriends(hide)
    setDisplayFav(hide)
  }


  return (
    <>
      <Row style={{ height: 30 }}>
        <Col className={`text-center border-end border-top text-light border-dark ${displayFav[0]}`}
          onClick={() => showFav()}>
          Favoritos
        </Col>
        <Col className={`text-center border-end border-top text-light border-dark ${displayFeed[0]}`}
          onClick={() => showFeed()}>
          Feed
        </Col>
        <Col className={`text-center border-end border-top text-light border-dark ${displayFriends[0]}`}
          onClick={() => showFriends()}>
          Amigos
        </Col>
      </Row>
      <Row className="flex-grow-1" >
        <Col lg={3} className={`d-flex justify-content-center align-items-center ${displayFav[1]}`}>
          <Favorites />
        </Col>
        <Col lg={6} className={`d-flex justify-content-center align-items-center ${displayFeed[1]}`} style={{ backgroundColor: "#303030" }}>

        </Col>
        <Col lg={3} className={`d-flex justify-content-center align-items-center ${displayFriends[1]}`}>
          <Friends />
        </Col>
      </Row>
    </>
  )
}
