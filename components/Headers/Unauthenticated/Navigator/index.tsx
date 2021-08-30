import React from 'react'
import { Col, Dropdown } from 'react-bootstrap'
import Link from 'next/link'
import { Botao } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { clearLoggedUser } from '../../../../store/modules/auth/reducer'
import { toast } from 'react-toastify'
import { useRouter } from 'next/dist/client/router'

export const Navigator = () => {

  const loggedUser = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const router = useRouter()

  const logOut = () => {
    toast.info('Você encerrou sua sessão.')
    dispatch(clearLoggedUser())
    router.reload()
  }

  if (loggedUser) {
    return (
      <Col lg={3} className="justify-content-center d-flex">
        <Col className="d-flex align-items-center justify-content-center" lg={6}>
          <Link href="#">
            <Dropdown className='text-center py-3'>
              <Dropdown.Toggle variant="info" id="dropdown-basic">
                {loggedUser['nickname']}
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ backgroundColor: '#1B1B1B' }}>
                <Dropdown.Item className='text-light' href="#/action-1">Perfil</Dropdown.Item>
                <Dropdown.Item className='text-light' href="#/action-2">Configurações</Dropdown.Item>
                <Dropdown.Item className='text-light' onClick={() => logOut()}>Sair</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Link>
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
