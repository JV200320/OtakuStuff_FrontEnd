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