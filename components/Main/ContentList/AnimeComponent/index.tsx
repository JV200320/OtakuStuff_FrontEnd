import React from 'react'
import { AnimeDiv } from './styles'
import { Col, Row } from 'react-bootstrap'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { setContentPageToDisplay } from '../../../../store/modules/contentPageToDisplay/reducer'

interface Props {
  anime: {
    image_url: string;
    title: string;
    rank: string;
    score: string;
    key: string;
    mal_id: string;
    rated: string;
    airing: boolean;
    episodes: string;
  }
}

export const AnimeComponent: React.FC<Props> = ({ anime }) => {

  const dispatch = useDispatch()

  const displayAnimePage = () => {
    const info = {
      id: anime.mal_id,
      kind: 'animes'
    }
    dispatch(setContentPageToDisplay(info))
  }

  if (anime.rank) {
    return (
      <AnimeDiv id={anime.mal_id} onClick={() => displayAnimePage()}>
        <Row>
          <Col lg={4} className="d-flex justify-content-center">
            <Image src={anime.image_url} alt={`${anime.title} image`} width={150} height={150} className="rounded-circle pb-2 pt-2" />
          </Col>
          <Col lg={8} className="text-center d-flex flex-column justify-content-center">
            <h5 className="text-light">
              {anime.title}
            </h5>
            <span className="text-light">Rank: {anime.rank}</span>
            <span className="text-light">Score: {anime.score}</span>
            <span className="text-light">Episódios: {anime.episodes}</span>
          </Col>
        </Row>
      </AnimeDiv>
    )
  } else {
    return (
      <AnimeDiv id={anime.mal_id} onClick={() => displayAnimePage()}>
        <Row>
          <Col lg={4} className="d-flex justify-content-center">
            <Image src={anime.image_url} alt={`${anime.title} image`} width={150} height={150} className="rounded-circle pb-2 pt-2" />
          </Col>
          <Col lg={8} className="text-center d-flex flex-column justify-content-center">
            <h5 className="text-light">
              {anime.title}
            </h5>
            <span className="text-light">Classificação: {anime.rated}</span>
            <span className="text-light">
              {anime.airing
                ? `Em lançamento, episódios: ${anime.episodes}`
                : `Concluído, episódios: ${anime.episodes}`}
            </span>
          </Col>
        </Row>
      </AnimeDiv>
    )
  }

}