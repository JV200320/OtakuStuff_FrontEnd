import { Header } from '../../../components/Headers/MainHeader'
import { Main } from '../../../components/Main'
import { Pagination } from '../../../components/Main/Feed/Pagination'
import { SearchAnimes } from '../../../components/Main/Feed/Lists/SearchAnimes'
import { useRouter } from 'next/dist/client/router'

const SearchAnimePage = () => {

  const router = useRouter()

  return (
    <>
      <Header />
      <Main>
        <SearchAnimes />
        <Pagination basePath={'/search/anime' + `?q=${router.query['q']}`} />
      </Main>
    </>
  )
}
export default SearchAnimePage