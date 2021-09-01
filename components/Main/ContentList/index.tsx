import React from 'react'
import AnimeService from '../../../services/animes/getAnimes'
import { AnimeComponent } from './AnimeComponent'
import { Spinner } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/modules/rootReducer'


export const ContentList = ({ Loading, setLoading, content, setContent }) => {

  const kindOfContentToDisplay: string = useSelector((state: RootState) => state.kindOfContentToDisplay)

  // TopAnime data

  React.useEffect(() => {
    AnimeService.getTopAnime(null).then(res => {
      setContent(res.data['animes'])
    })
    setLoading(false)
  }, [])

  const renderContent = () => {
    return content != null ? content.map((content) => {
      switch (kindOfContentToDisplay) {
        case 'animes':
          return <AnimeComponent
            title={content['title']} key={content['mal_id']}
            image_url={content['image_url']} rank={content['rank']}
            score={content['score']}
          />

        case 'usuários':
          console.log('AQUI')
          return <AnimeComponent
            title={content['nickname']} key={content['id']}
            image_url={content['image']} rank={content['rank']}
            score={content['score']}
          />

        default:
          break;
      }
    }) : null
  }

  return (
    <>
      {Loading ? <Spinner animation="border" variant="light" /> : renderContent()}
    </>
  )
}
