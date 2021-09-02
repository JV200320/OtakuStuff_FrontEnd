import { Dropdown } from 'react-bootstrap'
import styled from 'styled-components'

export const Botao = styled.button`
color: ${props => props.loggedUser ? '#4FE3FF' : '#FF6B4F'};
background-color: transparent;
border: 0;
font-size: 25px;

@media(max-width: 1000px) {
  & {
    display:none;
  }
}
`

export const CustomDropdown = styled(Dropdown)`
text-align: center;
@media(max-width: 1000px) {
  & {
    display:none;
  }
}
`