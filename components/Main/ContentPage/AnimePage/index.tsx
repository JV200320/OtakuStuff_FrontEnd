import React from 'react'
import { Row, Col, Spinner } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import AnimeService from '../../../../services/animes/getAnimes'
import { RootState } from '../../../../store/modules/rootReducer'

interface Props {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const AnimePage: React.FC<Props> = ({ setLoading }) => {

  const [animeContent, setAnimeContent] = React.useState(null)

  const { id } = useSelector((state: RootState) => state.contentPageToDisplay)

  const getAnimePageContent = async () => {
    setLoading(true)
    let res = await AnimeService.getAnimePageContent(id)
    setAnimeContent(res.data.anime)
    setLoading(false)
  }

  React.useEffect(() => {
    getAnimePageContent()
  }, [])

  if (animeContent == null)
    return <Spinner animation="border" variant="light" />

  return (
    <div className="w-100 h-100">
      <Row className="bg-light">
        <Col>
          hy
        </Col>
        <Col>
          hy
        </Col>
        <Col>
          hy
        </Col>
      </Row>
      <iframe
        src={animeContent.trailer_url}
        frameBorder="0"
        allowFullScreen={true}
        width='100%'
        height={500}
      />
    </div>
  )
}
