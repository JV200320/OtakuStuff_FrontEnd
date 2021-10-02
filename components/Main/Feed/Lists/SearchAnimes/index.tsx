import React from 'react'
import AnimeService from '../../../../../services/animes/getAnimes'
import { AnimeComponent } from '../Components/AnimeComponent'
import { CenterSpinner } from '../../../Shared/CenterSpinner'
import { useRouter } from 'next/dist/client/router'
import { toast } from 'react-toastify'
import { NoContent } from '../../NoContent'
import { Pagination } from '../../Pagination'


export const SearchAnimes: React.FC = () => {

  const router = useRouter()
  const [searchedAnimes, setSearchedAnimes] = React.useState(null)

  React.useEffect(() => {
    try {
      setSearchedAnimes(null)
      getSearchedAnimes()
    } catch (error) {
      error.response.data.errors.full_messages.forEach(message => toast.error(message))
    }
  }, [router.query])


  const getSearchedAnimes = async () => {
    let animes;
    animes = await AnimeService.searchAnime({ ...router.query })
    setSearchedAnimes(animes)
  }


  const renderContent = () => {
    let noAnimeFound = !searchedAnimes || searchedAnimes.length < 1

    if (noAnimeFound) {
      return <NoContent />
    }


    return (
      <>
        {
          searchedAnimes.map((anime, i) => (
            <AnimeComponent anime={anime} key={i} />
          ))
        }
        <Pagination basePath={'/search/anime' + `?q=${router.query['q']}`} />
      </>
    )
  }

  return (
    <>
      {searchedAnimes ? renderContent() : <CenterSpinner />}
    </>
  )
}
