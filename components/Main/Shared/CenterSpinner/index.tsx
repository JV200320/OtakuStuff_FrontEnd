import React from 'react'
import { Spinner } from 'react-bootstrap'

export const CenterSpinner = () => {
  return (
    <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
      <Spinner animation="border" variant="light" />
    </div>
  )
}
