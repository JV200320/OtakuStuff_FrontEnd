import React from 'react'
import { Botao } from "./styles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { IUser } from '../../../../dtos/User'
import { RootState } from '../../../../store/modules/rootReducer'
import { useRouter } from 'next/dist/client/router'
import { StyledInput } from '../../../Shared/StyledInput'
import { Theme } from '../../../../styles/theme'

interface IProps {
  search: string,
  setSearch: React.Dispatch<string>,
  setFilterModalShow: React.Dispatch<React.SetStateAction<boolean>>,
  confirmedFilter: string
}

export const Search: React.FC<IProps> = ({
  search, setSearch,
  setFilterModalShow, confirmedFilter
}) => {

  const loggedUser: null | IUser = useSelector((state: RootState) => state.auth)
  const router = useRouter()

  const searchContent = async () => {
    if (isSearchEmpty()) return searchForTopAnimeInstead()
    if (shouldSearchForAnimes()) return searchForAnimes()
    if (shouldSearchForUsers()) return searchForUsers()
    if (shouldSearchForPages()) return searchForPages()
  }

  const isSearchEmpty = (): boolean => {
    return search == '' || search == null
  }

  const searchForTopAnimeInstead = async () => {
    router.push('/')
  }

  const shouldSearchForAnimes = (): boolean => {
    return confirmedFilter == 'animes'
  }

  const shouldSearchForUsers = (): boolean => {
    return confirmedFilter == 'usuários'
  }

  const shouldSearchForPages = (): boolean => {
    return confirmedFilter == 'páginas'
  }

  const searchForAnimes = async () => {
    router.push(`/search/anime?q=${search}`)
  }

  const searchForUsers = async () => {
    router.push(`/search/user?q=${search}`)
  }

  const searchForPages = async () => {
    router.push(`/search/page?q=${search}`)
  }

  return (
    <>
      <Col lg={6} className="justify-content-center d-flex align-items-center">
        <Botao onClick={() => setFilterModalShow(true)}>
          <FontAwesomeIcon icon={faFilter} color={loggedUser ? '#4FE3FF' : '#FF6B4F'} className="me-2" />
        </Botao>
        <StyledInput
          placeholder={`Procurar por ${confirmedFilter}...`}
          value={search}
          onChange={e => setSearch(e.target.value)}
          onKeyPress={(e: React.KeyboardEvent) => e.key == "Enter" && searchContent()}
          loggedUser={loggedUser}
          width='75%'
          color={loggedUser ? Theme.appColors.loggedIn : Theme.appColors.loggedOff}
          borderColor={loggedUser ? Theme.appColors.loggedIn : Theme.appColors.loggedOff}
          shadow={loggedUser ? Theme.appShadows.loggedIn : Theme.appShadows.loggedOff}
        />
        <Botao onClick={() => searchContent()}>
          <FontAwesomeIcon icon={faSearch} color={loggedUser ? '#4FE3FF' : '#FF6B4F'} className="ms-2" />
        </Botao>
      </Col>
    </>
  )
}
