import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Theme } from '../../../../../../../../styles/theme'
import { HoverableIcon } from '../../../../../../../Shared/HoverableIcon'

interface IProps {
  setEditable: React.Dispatch<React.SetStateAction<boolean>>
}

export const EditIcon: React.FC<IProps> = ({ setEditable }) => {
  return (
    <div className='ms-3'>
      <HoverableIcon icon={faPencilAlt} onClick={() => setEditable(true)} hoverColor={Theme.appColors.loggedIn} />
    </div>
  )
}
