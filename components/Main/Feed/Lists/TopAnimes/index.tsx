import React from 'react'
import AnimeService from '../../../../../services/animes/getAnimes'
import { AnimeComponent } from '../Components/AnimeComponent'
import { CenterSpinner } from '../../../Shared/CenterSpinner'
import { useRouter } from 'next/dist/client/router'
import { toast } from 'react-toastify'


export const TopAnimes: React.FC = () => {

  const router = useRouter()
  const [topAnimes, setTopAnimes] = React.useState(null)

  React.useEffect(() => {
    try {
      setTopAnimes(null)
      getTopAnimes()
    } catch (error) {
      error.response.data.errors.full_messages.forEach(message => toast.error(message))
    }
  }, [router.query])


  const getTopAnimes = async () => {
    let animes;
    let { page } = router.query
    if (page) {
      animes = await AnimeService.getTopAnime(String(page))
    }
    if (router.pathname == '/') {
      animes = await AnimeService.getTopAnime(null)
    }
    setTopAnimes(animes)
  }


  const renderContent = () => {
    return topAnimes.map((anime, i) => {
      return (
        <AnimeComponent anime={anime} key={i} />
      )
    })
  }

  return (
    <>
      {topAnimes ? renderContent() : <CenterSpinner />}
    </>
  )
}
