import styled from 'styled-components'

export const CommentTextArea = styled.textarea`
background-color: transparent;
max-height: 300px;
min-height: 100px;
border: 1px solid ${props => props.theme.appColors.loggedIn};
color: ${props => props.theme.appColors.loggedIn};
border-radius: 7px;
&:focus{
  outline: none;
}
::placeholder{
  color: ${props => props.theme.appColors.loggedIn};
}
`

export const SubmitCommentButton = styled.button`
`
