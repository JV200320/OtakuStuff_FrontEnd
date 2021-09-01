import React from 'react'
import { Botao, SearchInput } from "./styles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Col } from 'react-bootstrap'
import AnimeService from '../../../../services/animes/getAnimes'
import { useSelector, useDispatch } from 'react-redux'
import { setFilter } from '../../../../store/modules/filter/reducer'
import UserService from '../../../../services/users/getUsers'

export const Search = ({ setContent, setLoading, search, setSearch, setFilterModalShow, confirmedFilter }) => {

  const loggedUser = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const searchContent = async () => {
    setLoading(true)
    let res;
    switch (confirmedFilter) {
      case 'animes':
        if (search == '') {
          res = await AnimeService.getTopAnime(null)
          setContent(res.data['animes'])
          dispatch(setFilter('animes'))
          setLoading(false)
          return
        }
        res = await AnimeService.searchAnime({ search: { q: search } })
        setContent(res.data['animes'])
        setLoading(false)
        break;
      case 'usuários':
        if (search == '') {
          res = await AnimeService.getTopAnime(null)
          setContent(res.data['animes'])
          dispatch(setFilter('animes'))
          setLoading(false)
          return
        }
        res = await UserService.searchUser({ search })
        console.log(res)
        setContent(res.data['results'])
        dispatch(setFilter('usuários'))
        setLoading(false)
        break;

      default:
        break;
    }
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
