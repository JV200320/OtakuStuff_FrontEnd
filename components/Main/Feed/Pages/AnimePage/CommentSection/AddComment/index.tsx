import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AnimePostService from '../../../../../../../services/posts/AnimePosts'
import { CommentTextArea, SubmitCommentButton } from './styles'

interface IProps {
  updateComments: () => Promise<void>
}

export const AddComment: React.FC<IProps> = ({ updateComments }) => {

  const [comment, setComment] = React.useState('')
  const router = useRouter()
  const { anime_id } = router.query

  const handleCommentSubmit = async () => {
    let success = await AnimePostService.createAnimePost(anime_id as string, comment)
    if (success) {
      setComment('')
      updateComments()
    } else {
      alert('Erro ao criar seu comentário.')
    }
  }

  return (
    <Container className='p-3'>
      <Row>
        <CommentTextArea
          type="text"
          placeholder='Escreva aqui seu comentário.'
          className='p-2'
          value={comment}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setComment(e.target.value)}
          onKeyPress={(e: React.KeyboardEvent) => e.key == 'Enter' && handleCommentSubmit()}
        />
      </Row>
      <Row>
        <Col lg={{ offset: 8, span: 4 }} className='p-2 text-end'>
          <SubmitCommentButton onClick={() => handleCommentSubmit()} className='btn btn-outline-info'>
            Enviar comentário
          </SubmitCommentButton>
        </Col>
      </Row>
    </Container>
  )
}
