import styled from 'styled-components'

export const UserDiv = styled.div`
width: 100%;
border-bottom: 1px solid ${props => props.theme.appColors.stroke};
margin-top: 5px;
&:hover{
  background-color: ${props => props.theme.appColors.hoverLightBackground};
  cursor: pointer;
}
`