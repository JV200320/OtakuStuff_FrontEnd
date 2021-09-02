import React from 'react'
import { PageDiv } from './styles'
import { Col, Row } from 'react-bootstrap'
import Image from 'next/image'

interface Props {
  image: string;
  title: string;
  description: string;
  user_id: string;
  key: string;
  id: string;
  creator: string
}

export const PageComponent: React.FC<Props> = (props) => {

  const defaultImgPath = '/images/pageImage/default.jpg'

  const hasImage = () => {
    return props.image != null && props.image != ''
  }

  return (
    <PageDiv id={props.id}>
      <Row>
        <Col lg={4} className="d-flex justify-content-center">
          <Image src={hasImage() ? props.image : defaultImgPath} alt={`${props.title} image`} width={150} height={150}
            className="rounded-circle pb-2 pt-2"
          />
        </Col>
        <Col lg={8} className="text-center d-flex flex-column justify-content-center">
          <h5 className="text-light">
            {props.title}
          </h5>
          <span className="text-light">{props.description}</span>
          <span className="text-light">Criador: {props.creator}</span>
        </Col>
      </Row>
    </PageDiv>
  )
}
