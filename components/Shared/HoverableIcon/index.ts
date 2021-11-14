import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const HoverableIcon = styled(FontAwesomeIcon)`
color: ${props => props.color};
&:hover {
  cursor: pointer;
  color: ${props => props.hoverColor ?? props.color};
  transition: 0.25s;
}
`
