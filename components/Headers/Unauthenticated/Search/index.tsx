import React from 'react'
import { Botao, SearchInput } from "./styles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Col } from 'react-bootstrap'
import AnimeService from '../../../../services/animes/getAnimes'
import { FilterModal } from '../FilterModal'
import { useSelector } from 'react-redux'

export const Search = ({ setAnimes, setLoading, search, setSearch, setFilterModalShow }) => {

  const filter = useSelector(state => state.filter)
  const loggedUser = useSelector(state => state.auth)

  const searchAnime = async () => {
    setLoading(true)
    let res;
    if (search == '') {
      res = await AnimeService.getTopAnime(null)
      setAnimes(res.data['animes'])
      setLoading(false)
      return
    }
    res = await AnimeService.searchAnime({ search: { q: search } })
    setAnimes(res.data['animes'])
    setLoading(false)
  }

  return (
    <>
      <Col lg={6} className="justify-content-center d-flex align-items-center">
        <Botao onClick={() => setFilterModalShow(true)}>
          <FontAwesomeIcon icon={faFilter} color={loggedUser ? '#4FE3FF' : '#FF6B4F'} className="me-2" />
        </Botao>
        <SearchInput placeholder={`Procurar por ${filter}...`} value={search}
          onChange={e => setSearch(e.target.value)}
          onKeyPress={e => e.key == "Enter" && searchAnime()}
          loggedUser={loggedUser}
        />
        <Botao onClick={() => searchAnime()}>
          <FontAwesomeIcon icon={faSearch} color={loggedUser ? '#4FE3FF' : '#FF6B4F'} className="ms-2" />
        </Botao>
      </Col>
    </>
  )
}
