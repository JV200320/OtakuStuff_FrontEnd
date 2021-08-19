import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Favorites } from './Favorites'
import { Friends } from './Friends'
import { AnimeList } from './AnimeList'
import styles from '../../styles/AnimeList/AnimeList.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { setAnimes } from '../../store/modules/animes/reducer'
import AnimeService from '../../services/animes/getAnimes'

let page = 1

export const Main = () => {


  const dispatch = useDispatch()

  const animes = useSelector(state => state.animes)

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

  const updateAnimesNext = async () => {
    page += 1
    await AnimeService.getTopAnime({ page: page }).then(res => dispatch(setAnimes(res.data['animes'])))
    document.getElementById("testescroll").scrollTo(0, 0)
  }

  const updateAnimesBefore = async () => {
    page > 1 ? page -= 1 : page
    await AnimeService.getTopAnime({ page: page }).then(res => dispatch(setAnimes(res.data['animes'])))
    document.getElementById("testescroll").scrollTo(0, 0)
  }

  const renderPageControl = () => {
    if (animes.length >= 1) {
      if (animes[0]['rank'] == '1') {
        return (
          <div className="fixed-bottom offset-3 col-6 text-center text-light" style={{ backgroundColor: '#303030' }}>
            <span onClick={() => updateAnimesNext()}>Próximo</span>
          </div>
        )
      } else {
        return (
          <div className="fixed-bottom offset-3 col-6 text-center text-light" style={{ backgroundColor: '#303030' }}>
            <a onClick={() => updateAnimesBefore()}>Anterior</a> | {page} | <a onClick={() => updateAnimesNext()}>Próximo</a>
          </div>
        )
      }
    }
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
        <Col lg={6} id="testescroll" className={`d-flex align-items-center flex-column overflow-scroll ${displayFeed[1]} ${styles.hide_scrollbar}`} style={{ backgroundColor: "#303030", height: 863 }}>
          <AnimeList />
          {renderPageControl()}
        </Col>
        <Col lg={3} className={`d-flex justify-content-center align-items-center ${displayFriends[1]}`}>
          <Friends />
        </Col>
      </Row>
    </>
  )
}
