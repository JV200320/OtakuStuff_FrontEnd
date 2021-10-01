import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Navbar, Brand, Toggle } from "./styles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { MobileMenu } from './MobileMenu'
import { Search } from './Search'
import { Navigator } from './Navigator'
import { useFilterModal } from './FilterModal'
import { useSelector } from 'react-redux'
import User from '../../../dtos/User'
import Anime from '../../../dtos/Animes'
import { RootState } from '../../../store/modules/rootReducer'


export const Header: React.FC = () => {

  const [showMenu, setShowMenu] = React.useState("none")
  const [filterModalShow, setFilterModalShow] = React.useState(false)
  const [search, setSearch] = React.useState("")

  const loggedUser: null | User = useSelector((state: RootState) => state.auth)

  const hideModal = (): void => {
    setFilterModalShow(false)
    setSelectedFilter('animes')
  }

  const {
    renderFilterModal, setConfirmedFilter,
    setSelectedFilter, confirmedFilter
  } = useFilterModal({ onHide: () => hideModal(), show: filterModalShow })

  return (
    <Navbar>
      {renderFilterModal}
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
          {...{
            setFilterModalShow, setSearch, search,
            confirmedFilter, setConfirmedFilter
          }}
        />
        {/* Search */}
        {/* Entrar e Cadastrar/Username */}
        <Navigator />
        {/* Entrar e Cadastrar */}
      </Row>

      {/*Mobile Menu*/}
      <MobileMenu
        {...{
          showMenu, setShowMenu, setFilterModalShow, setSearch, search,
          confirmedFilter, setConfirmedFilter
        }}
      />
      {/*Mobile Menu*/}
    </Navbar>
  )
}
