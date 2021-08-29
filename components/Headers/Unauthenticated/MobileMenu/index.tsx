import React from 'react'
import { faTimes, faFilter, faSearch } from '@fortawesome/free-solid-svg-icons'
import { DivMobile, Toggle, BotaoMobile, SearchMobile } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import AnimeService from '../../../../services/animes/getAnimes'
import { useSelector } from 'react-redux'

export const MobileMenu = ({ showMenu, setShowMenu, setAnimes, setSearch, setLoading, search,
  setFilterModalShow }) => {

  const filter = useSelector(state => state.filter)

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
    <DivMobile className={`d-lg-none d-${showMenu} flex-column justify-content-center position-absolute top-0 w-100 p-2 bg-dark`}>
      <Toggle className="position-absolute top-0 end-0">
        <FontAwesomeIcon icon={faTimes} color="#FF6B4F" onClick={() => setShowMenu("none")} />
      </Toggle>
      <Link href="/Login">
        <BotaoMobile>
          Entrar
        </BotaoMobile>
      </Link>
      <Link href="/SignUp">
        <BotaoMobile>
          Cadastrar
        </BotaoMobile>
      </Link>
      <div className="d-lg-none d-flex justify-content-center z-index-3">
        <BotaoMobile onClick={() => setFilterModalShow(true)}>
          <FontAwesomeIcon icon={faFilter} color="#FF6B4F" className="me-2" />
        </BotaoMobile>
        <SearchMobile placeholder={`Procurar por ${filter}...`} value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
        />
        <BotaoMobile onClick={() => searchAnime()}>
          <FontAwesomeIcon icon={faSearch} color="#FF6B4F" className="ms-2" />
        </BotaoMobile>
      </div>
    </DivMobile>
  )
}
