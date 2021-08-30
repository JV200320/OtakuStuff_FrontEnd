import styled from 'styled-components'

export const Lupa = styled.button`
color: #4FE3FF;
background-color: transparent;
border: 0;
font-size: 25px;

@media(max-width: 1270px) {
  & {
    display:none;
  }
}
`

export const Search = styled.input`
width: 75%;
border: 2px solid #4FE3FF;
color: #4FE3FF;
background-color: transparent;
border-radius: 6px;
padding: 5px;
&:focus{
  outline: none;
}
::placeholder{
  color: #4FE3FF;
}
`