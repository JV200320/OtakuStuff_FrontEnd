import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Favorites } from './Favorites'
import { Friends } from './Friends'
import { AnimeList } from './AnimeList'
import styles from '../../styles/AnimeList/AnimeList.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { setAnimes } from '../../store/modules/animes/reducer'
import AnimeService from '../../services/animes/getAnimes'
import inputStyle from '../../styles/Shared/HiddenInputArrow/index.module.css'


export const Main = () => {
  const dispatch = useDispatch()

  const animes = useSelector(state => state.animes)

  const [page, setPage] = React.useState(1)

  // Aparece ou não
  const show = ['d-none', '']
  const hide = ['d-block d-sm-block d-lg-none', 'd-none d-lg-flex']

  // Estado de loading
  const [Loading, setLoading] = React.useState(true)

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

  const getPageAnime = async (page) => {
    document.getElementById('page_input').blur()
    setLoading(true)
    let res = await AnimeService.getTopAnime({ page: page })
    if (res.data['animes'].length == 0) {
      alert("Erro ao se comunicar com o servidor, tente novamente.")
      setLoading(false)
      return
    }
    dispatch(setAnimes(res.data['animes']))
    setLoading(false)
  }

  const updateAnimesNext = async () => {
    setLoading(true)
    let res = await AnimeService.getTopAnime({ page: page + 1 })
    if (res.data['animes'].length == 0) {
      alert("Erro ao se comunicar com o servidor, tente novamente.")
      setLoading(false)
      return
    }
    dispatch(setAnimes(res.data['animes']))
    setLoading(false)
    document.getElementById("testescroll").scrollTo(0, 0)
    setPage(page + 1)
  }

  const updateAnimesBefore = async () => {
    if (page > 1) {
      setLoading(true)
      let res = await AnimeService.getTopAnime({ page: page - 1 })
      if (res.data['animes'].length == 0) {
        alert("Erro ao se comunicar com o servidor, tente novamente.")
        setLoading(false)
        return
      }
      dispatch(setAnimes(res.data['animes']))
      setLoading(false)
      document.getElementById("testescroll").scrollTo(0, 0)
      setPage(page - 1)
    }
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
            <a onClick={() => updateAnimesBefore()}>Anterior</a> |
            <input type="number" id="page_input" value={page} onChange={e => setPage(Number(e.target.value))}
              onKeyPress={(e) => e.key === 'Enter' && getPageAnime(page)}
              className={`bg-transparent border-0 text-light text-center ${inputStyle.hidden_arrow}`} style={{ width: 30 }} />
            | <a onClick={() => updateAnimesNext()}>Próximo</a>
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
          <AnimeList isLoading={Loading} setLoading={setLoading} />
          {renderPageControl()}
        </Col>
        <Col lg={3} className={`d-flex justify-content-center align-items-center ${displayFriends[1]}`}>
          <Friends />
        </Col>
      </Row>
    </>
  )
}
