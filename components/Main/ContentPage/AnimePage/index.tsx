import React from 'react'
import { Row, Col } from 'react-bootstrap'

export const AnimePage: React.FC = (props) => {
  return (
    <div className="w-100 h-100">
      <Row className="bg-light">
        <Col>
          hy
        </Col>
        <Col>
          hy
        </Col>
        <Col>
          hy
        </Col>
      </Row>
      <iframe
        src={props.trailer_url}
        frameBorder="0"
        allowFullScreen={true}
        width='100%'
        height={500}
      />
    </div>
  )
}
