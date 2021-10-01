import React from 'react'
import AnimeService from '../../../../../services/animes/getAnimes'
import { AnimeComponent } from '../Components/AnimeComponent'
import { CenterSpinner } from '../../../Shared/CenterSpinner'
import { useRouter } from 'next/dist/client/router'
import { toast } from 'react-toastify'


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
    return searchedAnimes.map((anime, i) => {
      return (
        <AnimeComponent anime={anime} key={i} />
      )
    })
  }

  return (
    <>
      {searchedAnimes ? renderContent() : <CenterSpinner />}
    </>
  )
}
