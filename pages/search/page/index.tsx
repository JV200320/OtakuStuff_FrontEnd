import ValidateToken from '../../../components/Auth/ValidateToken'
import { Header } from '../../../components/Headers/MainHeader'
import { Main } from '../../../components/Main'
import { SearchPages } from '../../../components/Main/Feed/Lists/SearchPages'

const SearchPagesPage = () => {

  return (
    <>
      <Header />
      <Main>
        <SearchPages />
      </Main>
    </>
  )
}
export default ValidateToken(SearchPagesPage)