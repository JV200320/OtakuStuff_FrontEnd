import styled from 'styled-components'

export const FavoriteAnimeDiv = styled.div`
width: 100%;
height: 100px;
background: url(${props => props.src});
background-repeat: no-repeat;
background-position: center;
background-size: cover;
&:hover{
  cursor: pointer;
}
`

export const ImageFilter = styled.div`
width: 100%;
height: 100%;
background-color: rgba(0,0,0,0.7);
display: flex;
justify-content: center;
align-items: center;
color: white;
backdrop-filter: blur(1.5px);
&:hover{
  font-weight: bold;
  backdrop-filter: blur(0px);
  background-color: rgba(0,0,0,0);
  transition: 0.5s;
}
`