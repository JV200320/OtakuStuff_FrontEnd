import { Header } from '../../../components/Headers/MainHeader'
import { Main } from '../../../components/Main'
import { Pagination } from '../../../components/Main/Feed/Pagination'
import { useRouter } from 'next/dist/client/router'
import { SearchPages } from '../../../components/Main/Feed/Lists/SearchPages'

const SearchPagesPage = () => {

  const router = useRouter()

  return (
    <>
      <Header />
      <Main>
        <SearchPages />
        <Pagination basePath={'/search/page' + `?q=${router.query['q']}`} />
      </Main>
    </>
  )
}
export default SearchPagesPage