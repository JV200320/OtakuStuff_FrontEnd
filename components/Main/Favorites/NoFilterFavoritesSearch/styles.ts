import styled from 'styled-components'

export const Search = styled.input`
width: 75%;
border: 2px solid ${props => props.theme.appColors.loggedIn};
color: ${props => props.theme.appColors.loggedIn};
background-color: transparent;
border-radius: 6px;
padding: 5px;
text-align: center;
&:focus{
  outline: none;
}
::placeholder{
  color: ${props => props.theme.appColors.loggedIn};
}
`