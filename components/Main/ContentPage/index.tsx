import React from 'react'
import { useSelector } from 'react-redux'
import AnimeService from '../../../services/animes/getAnimes'
import { RootState } from '../../../store/modules/rootReducer'
import { AnimePage } from './AnimePage'

export const ContentPage: React.FC = () => {

  const { id, kind } = useSelector((state: RootState) => state.contentPageToDisplay)

  const [animeContent, setAnimeContent] = React.useState(null)

  const getAnimePageContent = async () => {
    let res = await AnimeService.getAnimePageContent(id)
    setAnimeContent(res.data.anime)
  }

  React.useEffect(() => {
    getAnimePageContent()
  }, [])

  const PageComponentToRender = (): JSX.Element => {
    if (isContentPageToDisplayKindAnime())
      return renderAnimePage()
  }

  const isContentPageToDisplayKindAnime = (): boolean => {
    return kind == 'animes'
  }

  const renderAnimePage = (): JSX.Element => {
    return (
      <AnimePage {...animeContent} />
    )
  }

  return (
    <>
      {PageComponentToRender()}
    </>
  )
}
