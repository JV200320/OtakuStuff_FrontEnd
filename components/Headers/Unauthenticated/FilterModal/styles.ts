import styled from 'styled-components'
import { Button } from 'react-bootstrap'

export const ConfirmButton = styled(Button)`
width: 70%;
background-color: transparent;
border-color: #FF6B4F;
color: #FF6B4F;
&:hover {
  background-color: #FF6B4F;
  border-color: #FF6B4F;
}
&:focus {
  background-color: #FF6B4F;
  border-color: #FF6B4F;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.6);
}
`