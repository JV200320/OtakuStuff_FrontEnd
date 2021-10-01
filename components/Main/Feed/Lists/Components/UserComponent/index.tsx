import React from 'react'
import { UserDiv } from './styles'
import { Col, Row } from 'react-bootstrap'
import Image from 'next/image'

interface Props {
  image: string;
  nickname: string;
  bio: string;
  recentFavorites: string[];
  key: string;
  id: string
}

export const UserComponent: React.FC<Props> = (props) => {

  const defaultImgPath = '/images/pageImage/default.jpg'

  const hasImage = () => {
    return props.image != null && props.image != ''
  }

  const isRecentFavoritesEmpty = (): boolean => {
    return props.recentFavorites.length === 0
  }

  const joinRecentFavoritesTitlesIntoString = (favoritesArray: string[]): string => {
    let recentFavoritesString: string = ''
    favoritesArray.forEach((title) => {
      recentFavoritesString += title + ', '
    })
    recentFavoritesString = formatStringPunctuation(recentFavoritesString)
    return recentFavoritesString
  }

  const formatStringPunctuation = (selectedString): string => {
    selectedString = selectedString.slice(0, selectedString.length - 2)
    return selectedString + '.'
  }

  return (
    <UserDiv id={props.id}>
      <Row>
        <Col lg={4} className="d-flex justify-content-center">
          <Image src={hasImage() ? props.image : defaultImgPath} alt={`${props.nickname} image`} width={150} height={150} className="rounded-circle pb-2 pt-2" />
        </Col>
        <Col lg={8} className="text-center d-flex flex-column justify-content-center">
          <h5 className="text-light">
            {props.nickname}
          </h5>
          <span className="text-light">{props.bio}</span>
          {
            isRecentFavoritesEmpty()
              ?
              null
              :
              <span className="text-light">
                Últimos favoritados: {joinRecentFavoritesTitlesIntoString(props.recentFavorites)}
              </span>
          }
        </Col>
      </Row>
    </UserDiv>
  )
}