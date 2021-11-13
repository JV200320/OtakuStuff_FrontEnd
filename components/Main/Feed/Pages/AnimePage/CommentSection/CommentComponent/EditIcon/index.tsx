import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { EditHoverable } from './styles'

interface IProps {
  setEditable: React.Dispatch<React.SetStateAction<boolean>>
}

export const EditIcon: React.FC<IProps> = ({ setEditable }) => {
  return (
    <div className='ms-3'>
      <EditHoverable icon={faPencilAlt} onClick={() => setEditable(true)} />
    </div>
  )
}
