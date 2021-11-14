import styled from 'styled-components'
import { Col } from 'react-bootstrap'

export const MainCol = styled(Col)`
background-color: ${props => props.theme.appColors.lightBackground};
height: calc(100vh - 66px);
overflow-y: scroll
`
export const SideCol = styled(Col)`
height: calc(100vh - 66px);
overflow-y: scroll
`