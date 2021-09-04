import React from 'react'
import AnimeService from '../../../services/animes/getAnimes'
import { AnimeComponent } from './AnimeComponent'
import { UserComponent } from './UserComponent'
import { PageComponent } from './PageComponent'
import { Spinner } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/modules/rootReducer'
import Anime from '../../../dtos/Animes'
import User from '../../../dtos/User'

interface Props {
  Loading: boolean,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  content: Anime[] | User[],
}

export const ContentList: React.FC<Props> = ({ Loading, content }) => {

  const kindOfContentListToDisplay: string = useSelector((state: RootState) => state.kindOfContentListToDisplay)

  const renderContent = (): JSX.Element[] => {
    if (content == null) return null
    if (isContentAnimes()) {
      return displayAnimeComponents()
    }
    if (isContentUsers()) {
      return displayUserComponents()
    }
    if (isContentPages()) {
      return displayPageComponents()
    }
  }

  const isContentAnimes = (): boolean => {
    return kindOfContentListToDisplay == 'animes'
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
    return kindOfContentListToDisplay == 'usuários'
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

  const isContentPages = (): boolean => {
    return kindOfContentListToDisplay == 'páginas'
  }

  const displayPageComponents = (): JSX.Element[] => {
    return content.map((page) => {
      return (<PageComponent
        title={page['title']} key={page['id']} id={page['id']}
        image={page['image']} description={page['description']}
        user_id={page['user_id']} creator={page['owner_nickname']}
      />)
    })
  }

  return (
    <>
      {Loading ? <Spinner animation="border" variant="light" /> : renderContent()}
    </>
  )
}
