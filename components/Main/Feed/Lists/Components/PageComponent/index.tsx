import React from 'react'
import { PageDiv } from './styles'
import { Col, Row } from 'react-bootstrap'
import Image from 'next/image'

interface Props {
  page: {
    image: string;
    title: string;
    description: string;
    user_id: string;
    key: string;
    id: string;
    owner_nickname: string
  }
}

export const PageComponent: React.FC<Props> = ({ page }) => {

  const defaultImgPath = '/images/pageImage/default.jpg'

  const hasImage = () => {
    return page.image != null && page.image != ''
  }

  return (
    <PageDiv id={page.id}>
      <Row>
        <Col lg={4} className="d-flex justify-content-center">
          <Image src={hasImage() ? page.image : defaultImgPath} alt={`${page.title} image`} width={150} height={150}
            className="rounded-circle pb-2 pt-2"
          />
        </Col>
        <Col lg={8} className="text-center d-flex flex-column justify-content-center">
          <h5 className="text-light">
            {page.title}
          </h5>
          <span className="text-light">{page.description}</span>
          <span className="text-light">Dono: {page.owner_nickname}</span>
        </Col>
      </Row>
    </PageDiv>
  )
}
