import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/modules/rootReducer'
import { AnimePage } from './AnimePage'

interface Props {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const ContentPage: React.FC<Props> = ({ setLoading }) => {

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
      <AnimePage {...{ setLoading }} />
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
