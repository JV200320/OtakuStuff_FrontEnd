import React from 'react'
import { Col } from 'react-bootstrap'
import Link from 'next/link'
import { Botao } from './styles'

export const Navigator = () => {
  return (
    <Col lg={3} className="justify-content-center d-flex">
      <Col className="d-flex align-items-center justify-content-center" lg={6}>
        <Link href="/Login">
          <Botao>
            Entrar
          </Botao>
        </Link>
      </Col>
      <Col className="d-flex align-items-center justify-content-center" lg={6}>
        <Link href="/SignUp">
          <Botao>
            Cadastrar
          </Botao>
        </Link>
      </Col>
    </Col>
  )
}
