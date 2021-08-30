import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Navbar, Brand, Toggle } from "./styles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { MobileMenu } from './MobileMenu'
import { Search } from './Search'
import { Navigator } from './Navigator'
import { FilterModal } from './FilterModal'
import { useSelector } from 'react-redux'

interface Props {
  setLoading: Function,
  setAnimes: Function
}

export const UnauthenticatedHeader: React.FC<Props> = ({ setLoading, setAnimes }) => {

  const [showMenu, setShowMenu] = React.useState("none")
  const [filterModalShow, setFilterModalShow] = React.useState(false)
  const [search, setSearch] = React.useState("")

  const loggedUser = useSelector(state => state.auth)

  return (
    <Navbar>
      <FilterModal onHide={() => setFilterModalShow(false)} show={filterModalShow} />
      <Row>
        {/* Brand */}
        <Col lg={3} md={11} sm={11} xs={10} className="justify-content-center d-flex">
          <Brand loggedUser={loggedUser} >OtakuStuff</Brand>
        </Col>
        {/* Brand */}
        {/* Open Menu Icon */}
        <Col md={1} sm={1} xs={2} className="d-lg-none d-flex justify-content-center">
          <Toggle>
            <FontAwesomeIcon icon={faBars} color={loggedUser ? '#4FE3FF' : '#FF6B4F'} onClick={() => setShowMenu("flex")} />
          </Toggle>
        </Col>
        {/* Open Menu Icon */}
        {/* Search */}
        <Search
          setAnimes={setAnimes}
          setLoading={setLoading}
          search={search}
          setSearch={setSearch}
          setFilterModalShow={setFilterModalShow}
        />
        {/* Search */}
        {/* Entrar e Cadastrar/Username */}
        <Navigator />
        {/* Entrar e Cadastrar */}
      </Row>

      {/*Mobile Menu*/}
      <MobileMenu
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        setAnimes={setAnimes}
        setLoading={setLoading}
        setSearch={setSearch}
        search={search}
        setFilterModalShow={setFilterModalShow}
      />
      {/*Mobile Menu*/}
    </Navbar>
  )
}
