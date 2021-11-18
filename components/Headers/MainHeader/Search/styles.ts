import styled from 'styled-components'

export const ButtonDiv = styled.div`
color: ${props => props.loggedUser ? props.theme.appColors.loggedIn : props.theme.appColors.loggedOff};
font-size: 25px;

&:hover {
  cursor: pointer;
}

@media(max-width: 1000px) {
  & {
    display:none;
  }
}
`
