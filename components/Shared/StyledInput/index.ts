import { Form } from 'react-bootstrap'
import styled from 'styled-components'

export const StyledInput = styled(Form.Control)`
background-color: transparent;
border-color: ${props => props.theme.appColors.loggedOff};
text-align: ${props => props.textAlign ?? 'center'};
width: ${props => props.width ?? '50%'};
color: ${props => props.theme.appColors.loggedOff};
&:focus{
  color: ${props => props.theme.appColors.loggedOff};
  background-color: transparent;
  border-color: ${props => props.theme.appColors.loggedOff};
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.6);
}
::placeholder,
::-webkit-input-placeholder {
  color: ${props => props.theme.appColors.loggedOff};
}
:-ms-input-placeholder {
  color: ${props => props.theme.appColors.loggedOff};
}
`
