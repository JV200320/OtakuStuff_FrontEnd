import styled from 'styled-components'

export const SearchInput = styled.input`
width: 75%;
border: 2px solid ${props => props.loggedUser ? '#4FE3FF' : '#FF6B4F'};
color: ${props => props.loggedUser ? '#4FE3FF' : '#FF6B4F'};
background-color: transparent;
border-radius: 6px;
padding: 5px;
&:focus{
  outline: none;
}
::placeholder{
  color: ${props => props.loggedUser ? '#4FE3FF' : '#FF6B4F'};
}

@media(max-width: 1000px) {
  & {
    display:none;
  }
}
`

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