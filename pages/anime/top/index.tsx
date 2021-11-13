import React from 'react'
import { Header } from '../../../components/Headers/MainHeader'
import { Main } from '../../../components/Main'
import { Pagination } from '../../../components/Main/Feed/Pagination'
import { TopAnimes } from '../../../components/Main/Feed/Lists/TopAnimes'
import ValidateToken from '../../../components/Auth/ValidateToken'

const TopAnimePage = () => {

  return (
    <>
      <Header />
      <Main>
        <TopAnimes />
        <Pagination basePath='/anime/top' />
      </Main>
    </>
  )
}
export default ValidateToken(TopAnimePage)