import React from 'react'
import { faTimes, faFilter, faSearch } from '@fortawesome/free-solid-svg-icons'
import { DivMobile, Toggle, BotaoMobile, SearchMobile } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export const MobileMenu = ({ showMenu, setShowMenu }) => {
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
        <BotaoMobile>
          <FontAwesomeIcon icon={faFilter} color="#FF6B4F" className="me-2" />
        </BotaoMobile>
        <SearchMobile placeholder="Procurar por algo..." />
        <BotaoMobile>
          <FontAwesomeIcon icon={faSearch} color="#FF6B4F" className="ms-2" />
        </BotaoMobile>
      </div>
    </DivMobile>
  )
}
