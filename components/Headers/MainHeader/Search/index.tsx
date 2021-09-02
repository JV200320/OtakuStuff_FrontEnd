import React from 'react'
import { Botao, SearchInput } from "./styles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Col } from 'react-bootstrap'
import AnimeService from '../../../../services/animes/getAnimes'
import { useSelector, useDispatch } from 'react-redux'
import { setKindOfContentToDisplay } from '../../../../store/modules/kindOfContentToDisplay/reducer'
import UserService from '../../../../services/users/getUsers'
import Anime from '../../../../dtos/Animes'
import User from '../../../../dtos/User'
import { RootState } from '../../../../store/modules/rootReducer'

interface Props {
  setContent: React.Dispatch<Anime[]> | React.Dispatch<User[]>,
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
    if (isSearchEmpty()) return searchForTopAnimeInstead()
    if (shouldSearchForAnimes()) return searchForAnimes()
    if (shouldSearchForUsers()) return searchForUsers()
  }

  const isSearchEmpty = (): boolean => {
    return search == '' || search == null
  }

  const searchForTopAnimeInstead = async () => {
    let res = await AnimeService.getTopAnime(null)
    setContent(res.data['animes'])
    dispatch(setKindOfContentToDisplay('animes'))
    setConfirmedFilter('animes')
    setLoading(false)
  }

  const shouldSearchForAnimes = (): boolean => {
    return confirmedFilter == 'animes'
  }

  const shouldSearchForUsers = (): boolean => {
    return confirmedFilter == 'usuários'
  }

  const searchForAnimes = async () => {
    let res = await AnimeService.searchAnime({ search: { q: search } })
    setContent(res.data['animes'])
    dispatch(setKindOfContentToDisplay('animes'))
    setLoading(false)
  }

  const searchForUsers = async () => {
    let res = await UserService.searchUser({ search })
    setContent(res.data['results'])
    dispatch(setKindOfContentToDisplay('usuários'))
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
