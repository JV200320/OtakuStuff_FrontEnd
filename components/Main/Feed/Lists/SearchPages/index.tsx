import React from 'react'
import { CenterSpinner } from '../../../Shared/CenterSpinner'
import { useRouter } from 'next/dist/client/router'
import { PageComponent } from '../Components/PageComponent'
import PageService from '../../../../../services/pages/getPages'
import { toast } from 'react-toastify'
import { NoContent } from '../../NoContent'
import { Pagination } from '../../Pagination'


export const SearchPages: React.FC = () => {

  const router = useRouter()
  const [searchedPages, setSearchedPages] = React.useState(null)

  React.useEffect(() => {
    try {
      setSearchedPages(null)
      getSearchedPages()
    } catch (error) {
      error.response.data.errors.full_messages.forEach(message => toast.error(message))
    }
  }, [router.query])


  const getSearchedPages = async () => {
    let pages;
    pages = await PageService.searchPage({ ...router.query })
    setSearchedPages(pages)
  }


  const renderContent = () => {
    let noPageFound = !searchedPages || searchedPages.length < 1

    if (noPageFound) {
      return <NoContent />
    }


    return (
      <>
        {
          searchedPages.map((page, i) => (
            <PageComponent page={page} key={i} />
          ))
        }
        <Pagination basePath={'/search/page' + `?q=${router.query['q']}`} />
      </>
    )
  }

  return (
    <>
      {searchedPages ? renderContent() : <CenterSpinner />}
    </>
  )
}
