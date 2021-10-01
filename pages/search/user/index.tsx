import { Header } from '../../../components/Headers/MainHeader'
import { Main } from '../../../components/Main'
import { Pagination } from '../../../components/Main/Feed/Pagination'
import { SearchUsers } from '../../../components/Main/Feed/Lists/SearchUsers'
import { useRouter } from 'next/dist/client/router'

const SearchUserPage = () => {

  const router = useRouter()

  return (
    <>
      <Header />
      <Main>
        <SearchUsers />
        <Pagination basePath={'/search/user' + `?q=${router.query['q']}`} />
      </Main>
    </>
  )
}
export default SearchUserPage