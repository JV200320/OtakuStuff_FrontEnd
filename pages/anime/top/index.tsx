import React from 'react'
import { Header } from '../../../components/Headers/MainHeader'
import { Main } from '../../../components/Main'
import { Pagination } from '../../../components/Main/Feed/Pagination'
import { TopAnimes } from '../../../components/Main/Feed/Lists/TopAnimes'

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
export default TopAnimePage