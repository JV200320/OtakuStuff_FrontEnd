import styled from 'styled-components'

export const HoverableImage = styled.div`
border-radius: 50%;
background: url(${props => props.src});
width: 100%;
height: 100%;
background-repeat: no-repeat;
background-position: center;
background-size: cover;
&:hover{
  cursor: pointer;
  filter: blur(1.5px) brightness(0.4);
  transition: 0.5s;
}
`

export const ImageDiv = styled.div`
width: 400px;
height: 400px;
display: flex;
justify-content: center;
align-items: center;
color: white;
`

export const TextDiv = styled.div`
pointer-events: none;
position: absolute;
`
