import styled from 'styled-components'

export const Lupa = styled.button`
color: #FF6B4F;
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
border: 2px solid #FF6B4F;
color: #FF6B4F;
background-color: transparent;
border-radius: 6px;
padding: 5px;
&:focus{
  outline: none;
}
::placeholder{
  color: #FF6B4F;
}
`