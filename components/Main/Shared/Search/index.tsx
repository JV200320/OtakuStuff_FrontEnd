import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Col } from 'react-bootstrap'
import { Lupa, Search } from './styles'

interface SearchProps {
  look: string,
}

export const NoFilterSearch: React.FC<SearchProps> = ({ look }) => {
  return (
    <div className="w-100 d-flex justify-content-center mt-3">
      <Search placeholder={`Procurar por ${look}...`} />
      <Lupa>
        <FontAwesomeIcon icon={faSearch} color="#FF6B4F" className="ms-2" />
      </Lupa>
    </div>
  )
}
