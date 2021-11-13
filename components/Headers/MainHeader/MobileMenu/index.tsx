import React from 'react'
import { faTimes, faFilter, faSearch } from '@fortawesome/free-solid-svg-icons'
import { DivMobile, Toggle, BotaoMobile, SearchMobile } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { Dropdown } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { RootState } from '../../../../store/modules/rootReducer'
import User from '../../../../dtos/User'
import Cookies from 'js-cookie'
import { useRouter } from 'next/dist/client/router'

interface Props {
  search: string,
  setSearch: React.Dispatch<string>,
  setFilterModalShow: React.Dispatch<React.SetStateAction<boolean>>,
  confirmedFilter: string,
  setConfirmedFilter: React.Dispatch<string>,
  showMenu: string,
  setShowMenu: React.Dispatch<string>
}

export const MobileMenu: React.FC<Props> = ({
  showMenu, setShowMenu, setSearch,
  search, setFilterModalShow, confirmedFilter
}) => {

  const loggedUser: null | User = useSelector((state: RootState) => state.auth)
  const router = useRouter()

  const searchContent = async () => {
    let shouldSearchForAnimes = confirmedFilter == 'animes'
    let shouldSearchForUsers = confirmedFilter == 'usuários'

    if (!search) return searchForTopAnimeInstead()
    if (shouldSearchForAnimes) return searchForAnimes()
    if (shouldSearchForUsers) return searchForUsers()
  }

  const searchForTopAnimeInstead = async () => {
    router.push('/')
  }

  const searchForAnimes = async () => {
    router.push(`/search/anime?q=${search}`)
  }

  const searchForUsers = async () => {
    router.push(`/search/user?q=${search}`)
  }

  const logOut = () => {
    toast.info('Você encerrou sua sessão.')
    Cookies.remove('@api-data')
  }

  return (
    <DivMobile
      className={`d-lg-none d-${showMenu} flex-column justify-content-center position-absolute top-0 w-100 p-2 bg-dark`}
    >
      <Toggle className="position-absolute top-0 end-0" onClick={() => setShowMenu("none")}>
        <FontAwesomeIcon icon={faTimes} color={loggedUser ? '#4FE3FF' : '#FF6B4F'} />
      </Toggle>
      {
        loggedUser
          ?
          <Dropdown className='text-center py-3'>
            <Dropdown.Toggle variant="info" id="dropdown-basic">
              {loggedUser['nickname']}
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ backgroundColor: '#1B1B1B' }}>
              <Dropdown.Item className='text-light' href="#/action-1">Perfil</Dropdown.Item>
              <Dropdown.Item className='text-light' href="#/action-2">Configurações</Dropdown.Item>
              <Dropdown.Item className='text-light' onClick={() => logOut()}>Sair</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          :
          <>
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
          </>
      }
      <div className="d-lg-none d-flex justify-content-center z-index-3">
        <BotaoMobile onClick={() => setFilterModalShow(true)}>
          <FontAwesomeIcon
            icon={faFilter} color={loggedUser ? '#4FE3FF' : '#FF6B4F'} className="me-2"
          />
        </BotaoMobile>
        <SearchMobile placeholder={`Procurar por ${confirmedFilter}...`} value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
          loggedUser={loggedUser}
        />
        <BotaoMobile onClick={() => searchContent()}>
          <FontAwesomeIcon
            icon={faSearch} color={loggedUser ? '#4FE3FF' : '#FF6B4F'} className="ms-2"
          />
        </BotaoMobile>
      </div>
    </DivMobile>
  )
}
