import { Button } from 'react-bootstrap'
import styled from 'styled-components'

export const CustomButton = styled(Button)`
background-color: ${props => props.outlined ? 'transparent' : props.backgroundColor};
border-color: ${props => props.borderColor ?? props.backgroundColor};
color: ${props => props.color};
width:${props => props.width ?? '55%'};
margin: ${props => props.margin ?? '10px'};
&:hover {
  background-color: ${props => props.backgroundColor};
  border-color: ${props => props.backgroundColor};
  color: ${props => props.hoverTextColor ?? 'black'};
}
&:focus {
  background-color: ${props => props.backgroundColor};
  border-color: ${props => props.backgroundColor};
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.6);
}
`
