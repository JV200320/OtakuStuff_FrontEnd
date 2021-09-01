import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Favorites } from './Favorites'
import { Friends } from './Friends'
import { ContentList } from './ContentList'
import styles from './styles.module.css'
import { MainCol } from './styles'
import Anime from '../../dtos/Animes'
import { MobileViewChange } from './MobileViewChange'
import { PageControl } from './PageControl'

interface Props {
  Loading: boolean;
  setLoading: Function;
  content: Array<Anime>,
  setContent: Function
}

export const Main: React.FC<Props> = ({ Loading, setLoading, content, setContent }) => {

  // Aparece ou não
  const show = ['d-none', '']
  const hide = ['d-block d-sm-block d-lg-none', 'd-none d-lg-flex']

  // Estados que controlam qual view apresentar
  const [displayFav, setDisplayFav] = React.useState(hide)
  const [displayFriends, setDisplayFriends] = React.useState(hide)
  const [displayFeed, setDisplayFeed] = React.useState(show)

  return (
    <>
      <MobileViewChange
        {...{
          setDisplayFav, setDisplayFeed, setDisplayFriends, show, hide, displayFav,
          displayFeed, displayFriends
        }}
      />
      <Row className="flex-grow-1" >
        <Col lg={3} className={`d-flex justify-content-center align-items-center ${displayFav[1]}`}>
          <Favorites />
        </Col>
        <MainCol lg={6} id="mainView" className={`d-flex align-items-center ${Loading ? 'justify-content-center' : ''} flex-column overflow-scroll ${displayFeed[1]} ${styles.hide_scrollbar}`}>
          <ContentList {...{ Loading, setLoading, content, setContent }} />
          <PageControl {...{ setLoading, setContent, content }} />
        </MainCol>
        <Col lg={3} className={`d-flex justify-content-center align-items-center ${displayFriends[1]}`}>
          <Friends />
        </Col>
      </Row>
    </>
  )
}
