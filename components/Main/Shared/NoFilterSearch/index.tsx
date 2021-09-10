import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Lupa, Search } from './styles'

interface SearchProps {
  look: string,
}

export const NoFilterSearch: React.FC<SearchProps> = ({ look }) => {
  return (
    <div className="w-100 d-flex justify-content-center my-3">
      <Search placeholder={`${look}`} />
      <Lupa>
        <FontAwesomeIcon icon={faSearch} color="#4FE3FF" className="ms-2" />
      </Lupa>
    </div>
  )
}
