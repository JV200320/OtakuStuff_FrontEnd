import styled from 'styled-components'

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