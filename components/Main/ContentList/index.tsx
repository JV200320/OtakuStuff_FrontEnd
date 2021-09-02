import React from 'react'
import AnimeService from '../../../services/animes/getAnimes'
import { AnimeComponent } from './AnimeComponent'
import { UserComponent } from './UserComponent'
import { Spinner } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/modules/rootReducer'
import Anime from '../../../dtos/Animes'
import User from '../../../dtos/User'

interface Props {
  Loading: boolean,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  content: Anime[] | User[],
  setContent: React.Dispatch<React.SetStateAction<Anime[] | User[]>>
}

export const ContentList: React.FC<Props> = ({ Loading, setLoading, content, setContent }) => {

  const kindOfContentToDisplay: string = useSelector((state: RootState) => state.kindOfContentToDisplay)

  React.useEffect(() => {
    AnimeService.getTopAnime(null).then(res => {
      setContent(res.data['animes'])
    })
    setLoading(false)
  }, [])

  const renderContent = (): JSX.Element[] => {
    if (content == null) return null
    if (isContentAnimes()) {
      return displayAnimeComponents()
    }
    if (isContentUsers()) {
      return displayUserComponents()
    }
  }

  const isContentAnimes = (): boolean => {
    return kindOfContentToDisplay == 'animes'
  }

  const displayAnimeComponents = (): JSX.Element[] => {
    return content.map((anime) => {
      return (<AnimeComponent
        title={anime['title']} key={anime['mal_id']} id={anime['mal_id']}
        image_url={anime['image_url']} rank={anime['rank']}
        score={anime['score']}
      />)
    })
  }

  const isContentUsers = (): boolean => {
    return kindOfContentToDisplay == 'usuários'
  }

  const displayUserComponents = (): JSX.Element[] => {
    return content.map((user) => {
      return (<UserComponent
        nickname={user['nickname']} key={user['id']} id={user['id']}
        image={user['image']} bio={user['bio']}
        recentFavorites={createArrayWithThreeMostRecentFavorites(user.favorites)}
      />)
    })
  }

  const createArrayWithThreeMostRecentFavorites = (arrayToReverse: string[]): string[] => {
    return arrayToReverse?.slice().reverse().slice(0, 3)
  }

  return (
    <>
      {Loading ? <Spinner animation="border" variant="light" /> : renderContent()}
    </>
  )
}
