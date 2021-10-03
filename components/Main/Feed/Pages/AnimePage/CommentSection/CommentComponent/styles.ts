import styled from 'styled-components'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'

export const UserImage = styled(Image)`
border-radius: 50%;
`

export const UserNickname = styled.span`
margin-left: 10px;
`

export const UserCol = styled(Col)`
display: flex;
align-items: center;
`

export const TimeCol = styled(Col)`
display: flex;
align-items: center;
`

export const ContentContainer = styled(Container)`
border: 1px solid #707070;
border-radius: 5px;
padding: 10px;
margin-top: 10px;
`
