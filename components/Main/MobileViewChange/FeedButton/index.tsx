import React from 'react'
import { Col } from 'react-bootstrap'

export const FeedButton = ({ showFeed, displayFeed }) => {
  return (
    <Col className={`text-center border-end border-top text-light border-dark ${displayFeed[0]}`}
      onClick={() => showFeed()}>
      Feed
    </Col>
  )
}
