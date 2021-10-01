import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Favorites } from './Favorites'
import { Friends } from './Friends'
import styles from './styles.module.css'
import { MainCol, SideCol } from './styles'
import { MobileViewChange } from './Feed/MobileViewChange'


export const Main: React.FC = ({ children }) => {

  const show: string[] = ['d-none', '']
  const hide: string[] = ['d-block d-sm-block d-lg-none', 'd-none d-lg-flex']

  const [displayFavorites, setDisplayFavorites] = React.useState(hide)
  const [displayFriends, setDisplayFriends] = React.useState(hide)
  const [displayFeed, setDisplayFeed] = React.useState(show)

  return (
    <>
      <MobileViewChange
        {...{
          setDisplayFavorites, setDisplayFeed, setDisplayFriends, show, hide, displayFavorites,
          displayFeed, displayFriends
        }}
      />
      <Row className="flex-grow-1" >
        <SideCol lg={3} className={`d-flex justify-content-center align-items-center ${displayFavorites[1]} ${styles.hide_scrollbar}`}
          style={{ maxHeight: '100%' }}>
          <Favorites />
        </SideCol>
        <MainCol lg={6} id="mainView" className={`d-flex align-items-center flex-column overflow-scroll ${displayFeed[1]} ${styles.hide_scrollbar}`}>
          {children}
        </MainCol>
        <Col lg={3} className={`d-flex justify-content-center align-items-center ${displayFriends[1]} ${styles.hide_scrollbar}`}>
          <Friends />
        </Col>
      </Row>
    </>
  )
}
