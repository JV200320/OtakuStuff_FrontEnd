import React from 'react'
import { Row, Col, Spinner, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import AnimeService from '../../../../services/animes/getAnimes'
import { RootState } from '../../../../store/modules/rootReducer'
import Image from 'next/image'
import { SynopsisRow } from './style'

interface Props {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  Loading: boolean
}

export const AnimePage: React.FC<Props> = ({ setLoading, Loading }) => {

  const [animeContent, setAnimeContent] = React.useState(null)

  const { id } = useSelector((state: RootState) => state.contentPageToDisplay)
  const loggedUser = useSelector((state: RootState) => state.auth)

  const getAnimePageContent = async () => {
    setLoading(true)
    let res = await AnimeService.getAnimePageContent(id)
    setAnimeContent(res.data.anime)
    setLoading(false)
  }

  const buildGenreNamesList = (): string => {
    let genreNamesList = ''
    animeContent.genres.map((genreObject) => {
      genreNamesList += genreObject.name + ', '
    })
    return genreNamesList.slice(0, -2) + '.'
  }

  const formatDate = (date) => {
    if (date == null) return '---'

    date = date.slice(0, 10).split('-')
    date.reverse()
    return date.join('/')
  }

  const hasTrailer = () => {
    return animeContent.trailer_url != null
  }

  React.useEffect(() => {
    getAnimePageContent()
  }, [id])

  if (animeContent == null || Loading)
    return <Spinner animation="border" variant="light" />

  return (
    <div className="w-100 h-100 text-light">
      <Row>
        <Col lg={5} className="text-center">
          <Image
            src={animeContent.image_url}
            alt={`${animeContent.title} image`}
            width={150}
            height={150}
            className="rounded-circle pb-2 pt-2"
          />
          <p>{animeContent.title}</p>
        </Col>
        <Col lg={7}>
          <SynopsisRow>
            {animeContent.synopsis}
          </SynopsisRow>
          {
            loggedUser
              ?
              <Row className="d-flex justify-content-center py-2">
                <Button className="w-50" variant='info'>
                  Seguir
                </Button>
              </Row>
              :
              null
          }
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Status: {animeContent.status == 'Currently Airing' ? 'em lançamento' : 'concluído'}</p>
          <p>Fonte: {animeContent.source}</p>
          <p>Avaliado por {animeContent.scored_by} pessoas</p>
          <p>Rank: {animeContent.rank}</p>
          <p>Data de lançamento: {formatDate(animeContent.aired.from)}</p>
        </Col>
        <Col>
          <p>Nota: {animeContent.score}</p>
          <p>Classificação: {animeContent.rating}</p>
          <p>Episódios: {animeContent.episodes}</p>
          <p>Duração por episódio: {animeContent.duration.slice(0, 7)}</p>
          <p>Data de conclusão: {formatDate(animeContent.aired.to)}</p>
        </Col>
      </Row>
      <p>Gêneros: {buildGenreNamesList()}</p>
      {
        hasTrailer()
          ?
          <>
            <p className='text-center'>TRAILER</p>
            <iframe
              src={animeContent.trailer_url}
              frameBorder="0"
              allowFullScreen={true}
              width='100%'
              height={500}
            />
          </>
          :
          <div className='w-100 d-flex align-items-center' style={{ height: 150 }}>
            <p className='text-center w-100'>Não encontramos o trailer para esse anime.</p>
          </div>
      }
    </div>
  )
}
