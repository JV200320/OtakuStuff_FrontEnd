import React from 'react'
import { Col } from 'react-bootstrap'

interface Props {
  showFeed: () => void,
  displayFeed: string[]
}

export const FeedButton: React.FC<Props> = ({ showFeed, displayFeed }) => {
  return (
    <Col className={`text-center border-end border-top text-light border-dark ${displayFeed[0]}`}
      onClick={() => showFeed()}>
      Feed
    </Col>
  )
}
