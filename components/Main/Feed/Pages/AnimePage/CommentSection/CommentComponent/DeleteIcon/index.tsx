import { faTrash } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { toast } from 'react-toastify'
import AnimePostService from '../../../../../../../../services/posts/AnimePosts'
import { DeleteHoverable } from './styles'

interface IProps {
  comment_id: number,
  updateComments: () => Promise<void>
}

export const DeleteIcon: React.FC<IProps> = ({ comment_id, updateComments }) => {

  const deleteComment = async () => {
    let success = await AnimePostService.deleteAnimePost(comment_id)
    if (success) {
      updateComments()
    } else {
      toast.error('Um erro ocorreu ao excluir seu comentário, tente novamente mais tarde')
    }
  }

  return (
    <div className='ms-3'>
      <DeleteHoverable icon={faTrash} onClick={() => deleteComment()} />
    </div>
  )
}
