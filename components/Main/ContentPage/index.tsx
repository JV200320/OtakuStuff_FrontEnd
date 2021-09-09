import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/modules/rootReducer'
import { AnimePage } from './AnimePage'
import { Spinner } from 'react-bootstrap'

interface Props {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  Loading: boolean
}

export const ContentPage: React.FC<Props> = ({ setLoading, Loading }) => {

  const { kind } = useSelector((state: RootState) => state.contentPageToDisplay)

  const PageComponentToRender = (): JSX.Element => {
    if (isContentPageToDisplayKindAnime())
      return renderAnimePage()
  }

  const isContentPageToDisplayKindAnime = (): boolean => {
    return kind == 'animes'
  }

  const renderAnimePage = (): JSX.Element => {
    return (
      <AnimePage {...{ setLoading, Loading }} />
    )
  }

  // const isContentPageToDisplayKindUser = (): boolean => {
  //   return kind == 'animes'
  // }

  // const renderUserPage = (): JSX.Element => {
  //   return (
  //     <UserPage />
  //   )
  // }

  // const isContentPageToDisplayKindPage = (): boolean => {
  //   return kind == 'páginas'
  // }

  // const renderPagePage = (): JSX.Element => {
  //   return (
  //     <PagePage />
  //   )
  // }

  return (
    <>
      {PageComponentToRender()}
    </>
  )
}
