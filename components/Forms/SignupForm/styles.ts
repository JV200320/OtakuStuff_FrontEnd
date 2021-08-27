import styled from 'styled-components'
import { Row, Col, Button, Form } from 'react-bootstrap'

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
background-color: #303030;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
color: #FF6B4F;
border-radius: 17px;
width: 100%
`

export const SubmitButton = styled(Button)`
background-color: transparent;
border-color: #FF6B4F;
color: #FF6B4F;
width:55%;
margin-top: 10px;
margin-bottom: 10px;
&:hover {
  background-color: #FF6B4F;
  border-color: #FF6B4F;
}
&:focus {
  background-color: #FF6B4F;
  border-color: #FF6B4F;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.6);
}
`

export const StyledInput = styled(Form.Control)`
background-color: transparent;
border-color: #FF6B4F;
text-align: center;
width:75%;
color: #FF6B4F;
&:focus{
  color: #FF6B4F;
  background-color: transparent;
  border-color: #FF6B4F;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.6);
}
::placeholder,
::-webkit-input-placeholder {
  color: #FF6B4F;
}
:-ms-input-placeholder {
  color: #FF6B4F;
}
`

export const HoverableImage = styled.div`
border-radius: 50%;
background: url(${props => props.src});
width: 400px;
height: 400px;
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
background-color: rgba(0,0,0,0.2);
display: flex;
justify-content: center;
align-items: center;
color: white;
border-radius: 50%;
&:hover{
  backdrop-filter: blur(1.5px);
  background-color: rgba(0,0,0,0.7);
  transition: 0.5s;
}
`

export const ResponsiveRow = styled(Row)`
display: flex;
@media screen and (max-width:790px){
  & {
    flex-direction: column;
  }
}
`