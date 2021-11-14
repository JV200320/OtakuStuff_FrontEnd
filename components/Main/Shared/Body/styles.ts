import styled from 'styled-components'

export const Base = styled.div`
display: flex;
flex-direction: column;
background-color: ${props => props.theme.appColors.lightBackground};
border-radius: 17px;
height: 95%;
max-height: 95%;
width: 75%;
`