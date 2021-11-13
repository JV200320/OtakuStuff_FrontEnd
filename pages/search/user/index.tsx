import ValidateToken from '../../../components/Auth/ValidateToken'
import { Header } from '../../../components/Headers/MainHeader'
import { Main } from '../../../components/Main'
import { SearchUsers } from '../../../components/Main/Feed/Lists/SearchUsers'

const SearchUserPage = () => {

  return (
    <>
      <Header />
      <Main>
        <SearchUsers />
      </Main>
    </>
  )
}
export default ValidateToken(SearchUserPage)