import React from 'react'
import { Row, Button } from 'react-bootstrap'

export const UnfollowButton = () => {
  return (
    <Row className="d-flex justify-content-center py-2">
      <Button className="w-50" variant='info'>
        Parar de seguir
      </Button>
    </Row>
  )
}
