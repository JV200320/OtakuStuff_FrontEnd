import React from 'react'
import AnimeService from '../../../services/animes/getAnimes'
import { AnimeComponent } from './AnimeComponent'
import { Spinner } from 'react-bootstrap'


export const AnimeList = ({ Loading, setLoading, animes, setAnimes }) => {

  // TopAnime data

  React.useEffect(() => {
    AnimeService.getTopAnime(null).then(res => {
      setAnimes(res.data['animes'])
    })
    setLoading(false)
  }, [])

  const renderContent = () => {
    return animes != null ? animes.map((anime) => {
      return <AnimeComponent title={anime['title']} key={anime['mal_id']} image_url={anime['image_url']} rank={anime['rank']} score={anime['score']} />
    }) : null
  }

  return (
    <>
      {Loading ? <Spinner animation="border" variant="light" /> : renderContent()}
    </>
  )
}
