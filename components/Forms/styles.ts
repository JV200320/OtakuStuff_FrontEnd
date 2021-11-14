import styled from 'styled-components'
import { Row, Col, Form } from 'react-bootstrap'

export const MainDiv = styled(Row)`
height: 100%;
width: 100%;
display: flex;
`
export const Center = styled(Col)`
display: flex;
align-items: center;
justify-content: center
`

export const FormDiv = styled.div`
background-color: ${props => props.theme.appColors.lightBackground};
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
color: ${props => props.theme.appColors.loggedOff};
border-radius: 17px;
width: 100%
`

export const ResponsiveRow = styled(Row)`
display: flex;
@media screen and (max-width:790px){
  & {
    flex-direction: column;
  }
}
`