import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Navbar, Brand, Botao, Toggle, BotaoMobile, DivMobile } from "./styles"
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

interface Props {
  link: string[]
}

export const LoginAndSingupHeader: React.FC<Props> = ({ link }) => {

  const [showMenu, setShowMenu] = React.useState("none")

  return (
    <Navbar>
      <Row>
        {/* Brand */}
        <Col lg={{ span: 4, offset: 4 }} md={{ span: 4, offset: 4 }} sm={{ span: 4, offset: 4 }} xs={{ span: 4, offset: 4 }} className="justify-content-center d-flex">
          <Link href='/'><Brand>OtakuStuff</Brand></Link>
        </Col>
        {/* Brand */}
        {/* Open Menu Icon */}
        <Col md={{ offset: 3, span: 1 }} sm={1} xs={{ offset: 2, span: 1 }} className="d-lg-none d-flex justify-content-center">
          <Toggle>
            <FontAwesomeIcon icon={faBars} color="#FF6B4F" onClick={() => setShowMenu("flex")} />
          </Toggle>
        </Col>
        {/* Open Menu Icon */}
        {/* Entrar e Cadastrar */}
        <Col lg={4} className="justify-content-center d-flex">
          <Col className="d-flex align-items-center justify-content-center" lg={{ span: 6, offset: 6 }}>
            <Link href={link[0]}>
              <Botao>
                {link[1]}
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
        <Link href={link[0]}>
          <BotaoMobile>
            {link[1]}
          </BotaoMobile>
        </Link>
      </DivMobile>
      {/*Mobile Menu*/}
    </Navbar>
  )
}
