import styled from 'styled-components'

export const CommentTextArea = styled.textarea`
background-color: transparent;
max-height: 300px;
min-height: 100px;
border: 1px solid #4FE3FF;
color: #4FE3FF;
border-radius: 7px;
&:focus{
  outline: none;
}
::placeholder{
  color: #4FE3FF;
}
`

export const SubmitCommentButton = styled.button`
`
