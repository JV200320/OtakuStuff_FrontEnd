import ValidateToken from '../../../components/Auth/ValidateToken'
import { Header } from '../../../components/Headers/MainHeader'
import { Main } from '../../../components/Main'
import { SearchAnimes } from '../../../components/Main/Feed/Lists/SearchAnimes'

const SearchAnimePage = () => {

  return (
    <>
      <Header />
      <Main>
        <SearchAnimes />
      </Main>
    </>
  )
}
export default ValidateToken(SearchAnimePage)