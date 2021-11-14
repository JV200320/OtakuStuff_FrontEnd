import { Form } from 'react-bootstrap'
import styled from 'styled-components'

export const StyledInput = styled(Form.Control)`
background-color: transparent;
border-color: ${props => props.borderColor};
text-align: ${props => props.textAlign ?? 'center'};
width: ${props => props.width ?? '50%'};
color: ${props => props.color};
&:focus{
  color: ${props => props.color};
  background-color: transparent;
  border-color: ${props => props.color};
  box-shadow: ${props => props.shadow};
}
::placeholder,
::-webkit-input-placeholder {
  color: ${props => props.color};
}
:-ms-input-placeholder {
  color: ${props => props.color};
}
`
