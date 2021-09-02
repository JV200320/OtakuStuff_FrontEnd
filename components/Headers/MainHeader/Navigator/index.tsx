import React from 'react'
import { Col, Dropdown } from 'react-bootstrap'
import Link from 'next/link'
import { Botao, CustomDropdown } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { clearLoggedUser } from '../../../../store/modules/auth/reducer'
import { toast } from 'react-toastify'
import { RootState } from '../../../../store/modules/rootReducer'
import User from '../../../../dtos/User'

export const Navigator = () => {

  const loggedUser: null | User = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()

  const logOut = () => {
    toast.info('Você encerrou sua sessão.')
    dispatch(clearLoggedUser())
  }

  if (loggedUser) {
    return (
      <Col lg={3} className="justify-content-center d-flex">
        <Col className="d-flex align-items-center justify-content-center" lg={6}>
          <CustomDropdown className='py-3'>
            <Dropdown.Toggle variant="info" id="dropdown-basic">
              {loggedUser['nickname']}
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ backgroundColor: '#1B1B1B' }}>
              <Dropdown.Item className='text-light' >Perfil</Dropdown.Item>
              <Dropdown.Item className='text-light' >Configurações</Dropdown.Item>
              <Dropdown.Item className='text-light' onClick={() => logOut()}>Sair</Dropdown.Item>
            </Dropdown.Menu>
          </CustomDropdown>
        </Col>
      </Col>
    )
  }

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
