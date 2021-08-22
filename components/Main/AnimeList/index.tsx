import React from 'react'
import AnimeService from '../../../services/animes/getAnimes'
import { AnimeComponent } from './AnimeComponent'
import { useDispatch, useSelector } from 'react-redux'
import { setAnimes } from '../../../store/modules/animes/reducer'
import { Spinner } from 'react-bootstrap'


export const AnimeList = ({ isLoading, setLoading }) => {

  const dispatch = useDispatch()

  const animes = useSelector(state => state.animes)

  // TopAnime data

  React.useEffect(() => {
    AnimeService.getTopAnime(null).then(res => {
      dispatch(setAnimes(res.data['animes']))
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
      {isLoading ? <Spinner animation="border" variant="light" /> : renderContent()}
    </>
  )
}
