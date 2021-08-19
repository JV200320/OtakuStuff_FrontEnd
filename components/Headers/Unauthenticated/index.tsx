import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Navbar, Brand, Botao, Search, Toggle, BotaoMobile, SearchMobile, DivMobile } from "../../../styles/UnauthenticatedHeader/UnauthenticatedHeader"
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faFilter, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

export const UnauthenticatedHeader: React.FC = () => {

  const [showMenu, setShowMenu] = React.useState("none")

  return (
    <Navbar>
      <Row>
        {/* Brand */}
        <Col lg={3} md={11} sm={11} xs={10} className="justify-content-center d-flex">
          <Brand>OtakuStuff</Brand>
        </Col>
        {/* Brand */}
        {/* Open Menu Icon */}
        <Col md={1} sm={1} xs={2} className="d-lg-none d-flex justify-content-center">
          <Toggle>
            <FontAwesomeIcon icon={faBars} color="#FF6B4F" onClick={() => setShowMenu("flex")} />
          </Toggle>
        </Col>
        {/* Open Menu Icon */}
        {/* Search */}
        <Col lg={6} className="justify-content-center d-flex align-items-center">
          <Botao>
            <FontAwesomeIcon icon={faFilter} color="#FF6B4F" className="me-2" />
          </Botao>
          <Search placeholder="Procurar por algo..." />
          <Botao>
            <FontAwesomeIcon icon={faSearch} color="#FF6B4F" className="ms-2" />
          </Botao>
        </Col>
        {/* Search */}
        {/* Entrar e Cadastrar */}
        <Col lg={3} className="justify-content-center d-flex">
          <Col className="d-flex align-items-center justify-content-center" lg={6}>
            <Link href="#Entrar">
              <Botao>
                Entrar
              </Botao>
            </Link>
          </Col>
          <Col className="d-flex align-items-center justify-content-center" lg={6}>
            <Link href="#Cadastrar">
              <Botao>
                Cadastrar
              </Botao>
            </Link>
          </Col>
        </Col>
        {/* Entrar e Cadastrar */}
      </Row>

      {/*Mobile Menu*/}
      <DivMobile className={`d-lg-none d-${showMenu} flex-column justify-content-center position-absolute top-0 w-100 p-2 bg-dark`}>
        <Toggle className="position-absolute top-0 end-0">
          <FontAwesomeIcon icon={faTimes} color="#FF6B4F" onClick={() => setShowMenu("none")} />
        </Toggle>
        <Link href="#Entrar">
          <BotaoMobile>
            Entrar
          </BotaoMobile>
        </Link>
        <Link href="#Cadastrar">
          <BotaoMobile>
            Cadastrar
          </BotaoMobile>
        </Link>
        <div className="d-lg-none d-flex justify-content-center z-index-3">
          <BotaoMobile>
            <FontAwesomeIcon icon={faFilter} color="#FF6B4F" className="me-2" />
          </BotaoMobile>
          <SearchMobile placeholder="Procurar por algo..." />
          <BotaoMobile>
            <FontAwesomeIcon icon={faSearch} color="#FF6B4F" className="ms-2" />
          </BotaoMobile>
        </div>
      </DivMobile>
      {/*Mobile Menu*/}
    </Navbar>
  )
}
