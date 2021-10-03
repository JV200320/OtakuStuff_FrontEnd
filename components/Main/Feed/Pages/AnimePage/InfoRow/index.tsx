import React from 'react'
import { Row, Col } from 'react-bootstrap'

interface Genre {
  mal_id: number,
  name: string,
  type: string,
  url: string
}

interface AiredProp {
  from: { day, month, year },
  to: { day, month, year }
}

interface Aired {
  from: string,
  to: string,
  string: string,
  prop: AiredProp
}

interface Props {
  status: string,
  source: string,
  scored_by: number,
  rank: number,
  aired: Aired,
  score: number,
  rating: string,
  episodes: number,
  duration: string,
  genres: Genre[]
}

export const InfoRow: React.FC<Props> = (props) => {

  const formatDate = (date) => {
    if (date == null) return '---'

    date = date.slice(0, 10).split('-')
    date.reverse()
    return date.join('/')
  }


  const buildGenreNamesList = (): string => {
    let genreNamesList = ''
    props.genres.map((genreObject) => {
      genreNamesList += genreObject.name + ', '
    })
    return genreNamesList.slice(0, -2) + '.'
  }

  return (
    <>
      <Row className='mt-2'>
        <Col>
          <p>Status: {props.status == 'Currently Airing' ? 'Em lançamento' : 'Concluído'}</p>
          <p>Fonte: {props.source}</p>
          <p>Avaliado por {props.scored_by} pessoas</p>
          <p>Rank: {props.rank}</p>
          <p>Data de lançamento: {formatDate(props.aired.from)}</p>
        </Col>
        <Col>
          <p>Nota: {props.score}</p>
          <p>Classificação: {props.rating}</p>
          <p>Episódios: {props.episodes}</p>
          <p>Duração por episódio: {props.duration.slice(0, 7)}</p>
          <p>Data de conclusão: {formatDate(props.aired.to)}</p>
        </Col>
      </Row>
      <p>Gêneros: {buildGenreNamesList()}</p>
    </>
  )
}
