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
          return <UserComponent
            nickname={content['nickname']} key={content['id']}
            image={content['image']} bio={content['bio']}
            recentFavorites={reverseWithoutChangingArray(content.favorites)}
          />

        default:
          break;
      }
    }) : null
  }

  const reverseWithoutChangingArray = (arrayToReverse: string[]): string[] => {
    return arrayToReverse?.slice().reverse().slice(0, 3)
  }

  return (
    <>
      {Loading ? <Spinner animation="border" variant="light" /> : renderContent()}
    </>
  )
}
