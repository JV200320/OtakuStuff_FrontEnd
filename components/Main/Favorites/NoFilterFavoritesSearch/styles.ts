import styled from 'styled-components'

export const Search = styled.input`
width: 75%;
border: 2px solid #4FE3FF;
color: #4FE3FF;
background-color: transparent;
border-radius: 6px;
padding: 5px;
text-align: center;
&:focus{
  outline: none;
}
::placeholder{
  color: #4FE3FF;
}
`