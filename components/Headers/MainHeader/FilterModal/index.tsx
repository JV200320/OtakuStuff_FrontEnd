import React from 'react'
import { Modal, Form } from 'react-bootstrap'
import { ConfirmButton } from './styles'
import { useSelector } from 'react-redux'
import User from '../../../../dtos/User'
import { RootState } from '../../../../store/modules/rootReducer'
import { useRouter } from 'next/dist/client/router'

export const useFilterModal = (props) => {

  const router = useRouter()
  const loggedUser: null | User = useSelector((state: RootState) => state.auth)
  const [selectedFilter, setSelectedFilter] = React.useState('animes')
  const [confirmedFilter, setConfirmedFilter] = React.useState('animes')

  const confirmFilter = (): void => {
    props.onHide()
    setConfirmedFilter(selectedFilter)
    setSelectedFilter('animes')
  }

  React.useEffect(() => {
    switch (router.pathname) {
      case '/search/user':
        setConfirmedFilter('usuário')
        break;

      case '/search/anime':
        setConfirmedFilter('animes')
        break;

      case '/search/page':
        setConfirmedFilter('páginas')
        break;

      default:
        setConfirmedFilter('animes')
        break;
    }
  }, [])

  return {
    setConfirmedFilter, confirmedFilter, setSelectedFilter, renderFilterModal: (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter" className='w-100 text-center'>
            Selecione o que você deseja buscar
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="d-flex justify-content-center">
            <Form.Group className="mx-2" controlId="formBasicRadio1">
              <Form.Check type="radio" value="páginas" label="Páginas" name='searchFor'
                onClick={
                  (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
                    setSelectedFilter(e.currentTarget.value)
                  }}
              />
            </Form.Group>

            <Form.Group className="mx-2" controlId="formBasicRadio2">
              <Form.Check type="radio" value="usuários" label="Usuários" name='searchFor'
                onClick={
                  (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
                    setSelectedFilter(e.currentTarget.value)
                  }}
              />
            </Form.Group>

            <Form.Group className="mx-2" controlId="formBasicRadio3">
              <Form.Check type="radio" value="animes" label="Animes" name='searchFor'
                onClick={
                  (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
                    setSelectedFilter(e.currentTarget.value)
                  }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-center'>
          <ConfirmButton loggedUser={loggedUser} onClick={() => confirmFilter()}>
            Confirmar
          </ConfirmButton>
        </Modal.Footer>
      </Modal>
    )
  }
}
