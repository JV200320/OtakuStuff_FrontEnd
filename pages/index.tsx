import React from 'react'
import ValidateToken from '../components/Auth/ValidateToken'
import { Header } from '../components/Headers/MainHeader'
import { Main } from '../components/Main'
import { TopAnimes } from '../components/Main/Feed/Lists/TopAnimes'
import { Pagination } from '../components/Main/Feed/Pagination'

const Home: React.FC = () => {

  return (
    <>
      <Header />
      <Main >
        <TopAnimes />
        <Pagination basePath='/anime/top' />
      </Main>
    </>
  )
}
export default ValidateToken(Home);