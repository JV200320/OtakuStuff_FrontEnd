import { Dropdown } from 'react-bootstrap'
import styled from 'styled-components'

export const NavigationButton = styled.button`
color: ${props => props.loggedUser ? props.theme.appColors.loggedIn : props.theme.appColors.loggedOff};
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