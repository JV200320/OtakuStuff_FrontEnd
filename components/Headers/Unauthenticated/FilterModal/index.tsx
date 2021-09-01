import React from 'react'
import { Modal, Form } from 'react-bootstrap'
import { ConfirmButton } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../../../../store/modules/filter/reducer'

export const FilterModal = (props) => {

  const loggedUser = useSelector(state => state.auth)
  const dispatch = useDispatch();
  const [selectedFilter, setSelectedFilter] = React.useState('animes')

  const confirmFilter = () => {
    props.onHide()
    dispatch(setFilter(selectedFilter))
    setSelectedFilter('animes')
  }

  return (
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
              onClick={(e) => setSelectedFilter(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mx-2" controlId="formBasicRadio2">
            <Form.Check type="radio" value="usuários" label="Usuários" name='searchFor'
              onClick={(e) => setSelectedFilter(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mx-2" controlId="formBasicRadio3">
            <Form.Check type="radio" value="animes" label="Animes" name='searchFor'
              onClick={(e) => setSelectedFilter(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className='d-flex justify-content-center'>
        <ConfirmButton loggedUser={loggedUser} onClick={() => confirmFilter()}>Confirmar</ConfirmButton>
      </Modal.Footer>
    </Modal>
  )
}
