import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const DeleteHoverable = styled(FontAwesomeIcon)`
&:hover {
  cursor: pointer;
  color: red;
  transition: 0.25s;
}
`