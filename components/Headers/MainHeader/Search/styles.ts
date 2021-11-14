import styled from 'styled-components'

export const SearchInput = styled.input`
width: 75%;
border: 2px solid ${props => props.loggedUser ? props.theme.appColors.loggedIn : props.theme.appColors.loggedOff};
color: ${props => props.loggedUser ? props.theme.appColors.loggedIn : props.theme.appColors.loggedOff};
background-color: transparent;
border-radius: 6px;
padding: 5px;
&:focus{
  outline: none;
}
::placeholder{
  color: ${props => props.loggedUser ? props.theme.appColors.loggedIn : props.theme.appColors.loggedOff};
}

@media(max-width: 1000px) {
  & {
    display:none;
  }
}
`

export const Botao = styled.button`
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