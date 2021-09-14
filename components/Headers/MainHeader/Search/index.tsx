import React from 'react'
import { Botao, SearchInput } from "./styles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Col } from 'react-bootstrap'
import AnimeService from '../../../../services/animes/getAnimes'
import { useSelector, useDispatch } from 'react-redux'
import { setKindOfContentListToDisplay } from '../../../../store/modules/kindOfContentListToDisplay/reducer'
import UserService from '../../../../services/users/getUsers'
import Anime from '../../../../dtos/Animes'
import User from '../../../../dtos/User'
import { RootState } from '../../../../store/modules/rootReducer'
import PageService from '../../../../services/pages/getPages'
import { clearContentPageToDisplay } from '../../../../store/modules/contentPageToDisplay/reducer'
import Page from '../../../../dtos/Page'

interface Props {
  setContent: React.Dispatch<Anime[] | User[] | Page[]>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  search: string,
  setSearch: React.Dispatch<string>,
  setFilterModalShow: React.Dispatch<React.SetStateAction<boolean>>,
  confirmedFilter: string,
  setConfirmedFilter: React.Dispatch<string>,
}

export const Search: React.FC<Props> = ({
  setContent, setLoading, search, setSearch,
  setFilterModalShow, confirmedFilter, setConfirmedFilter
}) => {

  const loggedUser: null | User = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()

  const searchContent = async () => {
    setLoading(true)
    dispatch(clearContentPageToDisplay())
    if (isSearchEmpty()) return searchForTopAnimeInstead()
    if (shouldSearchForAnimes()) return searchForAnimes()
    if (shouldSearchForUsers()) return searchForUsers()
    if (shouldSearchForPages()) return searchForPages()
  }

  const isSearchEmpty = (): boolean => {
    return search == '' || search == null
  }

  const searchForTopAnimeInstead = async () => {
    let animes = await AnimeService.getTopAnime(null)
    setContent(animes)
    dispatch(setKindOfContentListToDisplay('animes'))
    dispatch(clearContentPageToDisplay())
    setConfirmedFilter('animes')
    setLoading(false)
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
    let animes = await AnimeService.searchAnime({ search: { q: search } })
    setContent(animes)
    dispatch(setKindOfContentListToDisplay('animes'))
    dispatch(clearContentPageToDisplay())
    setLoading(false)
  }

  const searchForUsers = async () => {
    let users = await UserService.searchUser({ search })
    setContent(users)
    dispatch(setKindOfContentListToDisplay('usuários'))
    dispatch(clearContentPageToDisplay())
    setLoading(false)
  }

  const searchForPages = async () => {
    let pages = await PageService.searchPage({ search })
    setContent(pages)
    dispatch(setKindOfContentListToDisplay('páginas'))
    dispatch(clearContentPageToDisplay())
    setLoading(false)
  }

  return (
    <>
      <Col lg={6} className="justify-content-center d-flex align-items-center">
        <Botao onClick={() => setFilterModalShow(true)}>
          <FontAwesomeIcon icon={faFilter} color={loggedUser ? '#4FE3FF' : '#FF6B4F'} className="me-2" />
        </Botao>
        <SearchInput placeholder={`Procurar por ${confirmedFilter}...`} value={search}
          onChange={e => setSearch(e.target.value)}
          onKeyPress={e => e.key == "Enter" && searchContent()}
          loggedUser={loggedUser}
        />
        <Botao onClick={() => searchContent()}>
          <FontAwesomeIcon icon={faSearch} color={loggedUser ? '#4FE3FF' : '#FF6B4F'} className="ms-2" />
        </Botao>
      </Col>
    </>
  )
}
