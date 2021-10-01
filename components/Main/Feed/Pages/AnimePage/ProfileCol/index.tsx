import React from 'react'
import { Col } from 'react-bootstrap'
import Image from 'next/image'

interface Props {
  image_url: string,
  title: string
}

export const ProfileCol: React.FC<Props> = ({ image_url, title }) => {
  return (
    <Col lg={5} className="text-center">
      <Image
        src={image_url}
        alt={`${title} image`}
        width={150}
        height={150}
        className="rounded-circle pb-2 pt-2"
      />
      <p>{title}</p>
    </Col>
  )
}
