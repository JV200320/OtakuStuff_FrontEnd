import React from 'react'
import { AnimeDiv } from '../../../../styles/AnimeList/AnimeList'
import { Col, Row } from 'react-bootstrap'
import Image from 'next/image'

export const AnimeComponent = (props) => {
  return (
    <AnimeDiv>
      <Row>
        <Col lg={4} className="d-flex justify-content-center">
          <Image src={props.image_url} alt={`${props.title} image`} width={150} height={150} className="rounded-circle pb-2 pt-2" />
        </Col>
        <Col lg={8} className="text-center d-flex flex-column justify-content-center">
          <h5 className="text-light">
            {props.title}
          </h5>
          <span className="text-light">Rank: {props.rank}</span>
          <span className="text-light">Score: {props.score}</span>
        </Col>
      </Row>
    </AnimeDiv>
  )
}
