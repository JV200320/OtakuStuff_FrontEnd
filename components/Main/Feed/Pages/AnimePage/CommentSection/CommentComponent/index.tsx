import React from 'react'
import { Row, Container, Col } from 'react-bootstrap'
import { AnimePost } from '../../../../../../../dtos/Posts'
import { ContentContainer, UserCol, UserImage, UserNickname, TimeCol } from './styles'
import moment from 'moment/min/moment-with-locales'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidHeart, faReply } from '@fortawesome/free-solid-svg-icons'
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../../../../store/modules/rootReducer'
import User from '../../../../../../../dtos/User'



interface Props {
  post: AnimePost,
  owner: boolean
}

export const CommentComponent: React.FC<Props> = ({ post, owner }) => {

  moment.locale('pt-br')
  const loggedUser: User = useSelector((state: RootState) => state.auth)

  const hasLoggedUserLiked = (): boolean => {
    let filter_result = post.likes.filter((like) => {
      return like.user_id == loggedUser.id
    })
    if (filter_result.length != 0) {
      return true
    }
    return false
  }

  const renderEditAndDelete = () => {
    if (owner) {
      let oneHourAfterPostCreated = moment(post.created_at).utc().add(1, 'hours')
      let now = moment().utc()
      if (now.isSameOrAfter(oneHourAfterPostCreated)) {
        return 'Delete'
      }
      return 'Edit/Delete'
    }
    return ''
  }


  return (
    <>
      <Row>
        <UserCol lg={3}>
          <UserImage src={post.user_image_url} width={60} height={60} />
          <UserNickname>{post.user_nickname}</UserNickname>
        </UserCol>
        <TimeCol className='justify-content-end'>
          Postado {moment(post.created_at).fromNow()} {renderEditAndDelete()}
        </TimeCol>
      </Row>
      <Row>
        <Container>
          <ContentContainer>
            {post.content}
          </ContentContainer>
        </Container>
      </Row>
      <Row>
        <Col className='text-center mt-2'>
          <span><FontAwesomeIcon
            icon={hasLoggedUserLiked() ? solidHeart : regularHeart} />
            {' ' + post.likes.length}</span>
        </Col>
        <Col className='text-center mt-2'>
          <span><FontAwesomeIcon icon={faReply} /> {post.replies}</span>
        </Col>
      </Row>
      <hr />
    </>
  )
}
