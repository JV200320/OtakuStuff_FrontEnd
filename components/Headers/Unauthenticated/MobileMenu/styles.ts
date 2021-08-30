import styled from 'styled-components'

export const BotaoMobile = styled.button`
color: ${props => props.loggedUser ? '#4FE3FF' : '#FF6B4F'};
background-color: transparent;
border: 0;
font-size: 25px;

@media(min-width: 1000px) {
  & {
    display:none;
  }
}
`
export const SearchMobile = styled.input`
width: 75%;
border: 2px solid ${props => props.loggedUser ? '#4FE3FF' : '#FF6B4F'};
color: ${props => props.loggedUser ? '#4FE3FF' : '#FF6B4F'};
background-color: transparent;
border-radius: 6px;
&:focus{
  outline: none;
}
::placeholder{
  color: ${props => props.loggedUser ? '#4FE3FF' : '#FF6B4F'};
}

@media(min-width: 1000px) {
  & {
    display:none;
  }
}
`

export const DivMobile = styled.div`
z-index: 10;
`

export const Toggle = styled.button`
color: ${props => props.loggedUser ? '#4FE3FF' : '#FF6B4F'};
background-color: transparent;
border: 0;
font-size: 25px;

@media(min-width: 1000px) {
  & {
    display:none;
  }
}
`