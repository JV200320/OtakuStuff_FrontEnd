import styled from 'styled-components'
import Image from 'next/image'
import { Col, Container } from 'react-bootstrap'

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

export const ContentContainer = styled.textarea`
border: 1px solid ${props => props.theme.appColors.commentContentBorder};
max-height: 300px;
min-height: 70px;
border-radius: 5px;
padding: 10px;
margin-top: 10px;
width: 100%;
color: white;
background-color: transparent;
::placeholder,
::-webkit-input-placeholder {
  color: white;
}
:-ms-input-placeholder {
  color: white;
}
`
