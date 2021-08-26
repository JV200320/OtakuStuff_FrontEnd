import styled from 'styled-components'

export const Navbar = styled.div`
width: 100%;
background-color: transparent;
`

export const Brand = styled.span`
color: #FF6B4F;
font-size: 44px;
font-family: 'Mouse Memoirs', sans-serif;
&:hover{
  cursor: pointer;
}
`

export const Botao = styled.button`
color: #FF6B4F;
background-color: transparent;
border: 0;
font-size: 25px;

@media(max-width: 1000px) {
  & {
    display:none;
  }
}
`

export const BotaoMobile = styled.button`
color: #FF6B4F;
background-color: transparent;
border: 0;
font-size: 25px;

@media(min-width: 1000px) {
  & {
    display:none;
  }
}
`

export const Toggle = styled.button`
color: #FF6B4F;
background-color: transparent;
border: 0;
font-size: 25px;

@media(min-width: 1000px) {
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

@media(max-width: 1000px) {
  & {
    display:none;
  }
}
`

export const SearchMobile = styled.input`
width: 75%;
border: 2px solid #FF6B4F;
color: #FF6B4F;
background-color: transparent;
border-radius: 6px;
&:focus{
  outline: none;
}
::placeholder{
  color: #FF6B4F;
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