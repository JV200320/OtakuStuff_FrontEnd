import React from 'react'
import { Row, Button } from 'react-bootstrap'

export const FollowButton = () => {
  return (
    <Row className="d-flex justify-content-center py-2">
      <Button className="w-50" variant='info'>
        Seguir
      </Button>
    </Row>
  )
}
