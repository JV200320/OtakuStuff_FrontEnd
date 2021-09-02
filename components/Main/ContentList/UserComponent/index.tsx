import React from 'react'
import { AnimeDiv } from './styles'
import { Col, Row } from 'react-bootstrap'
import Image from 'next/image'

interface Props {
  image: string;
  nickname: string;
  bio: string;
  recentFavorites: string[];
  key: string
}

export const UserComponent: React.FC<Props> = (props) => {

  const joinRecentFavoritesTitlesIntoString = (favoritesArray: string[]): string => {
    let recentFavoritesString = ''
    favoritesArray.forEach((string) => recentFavoritesString += JSON.parse(string)['title'] + ', ')
    recentFavoritesString = recentFavoritesString.slice(0, recentFavoritesString.length - 2)
    return recentFavoritesString
  }

  return (
    <AnimeDiv id={props.key}>
      <Row>
        <Col lg={4} className="d-flex justify-content-center">
          <Image src={props.image} alt={`${props.nickname} image`} width={150} height={150} className="rounded-circle pb-2 pt-2" />
        </Col>
        <Col lg={8} className="text-center d-flex flex-column justify-content-center">
          <h5 className="text-light">
            {props.nickname}
          </h5>
          <span className="text-light">{props.bio}</span>
          {
            props.recentFavorites.length > 0
              ?
              <span className="text-light">
                Últimos favoritados: {joinRecentFavoritesTitlesIntoString(props.recentFavorites)}
              </span>
              :
              null
          }
        </Col>
      </Row>
    </AnimeDiv>
  )
}