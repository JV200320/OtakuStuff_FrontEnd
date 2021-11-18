import React from 'react'
import { IAnimePost } from '../../../../../../../../dtos/Posts'
import { faHeart as solidHeart, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'
import { ClickableIcon } from './styles'
import AnimePostService from '../../../../../../../../services/posts/AnimePosts'
import { useSelector } from 'react-redux'
import { IUser } from '../../../../../../../../dtos/User'
import { RootState } from '../../../../../../../../store/modules/rootReducer'
import { toast } from 'react-toastify'

interface IProps {
  comment: IAnimePost
}

export const LikeIcon: React.FC<IProps> = ({ comment }) => {

  const loggedUser: IUser = useSelector((state: RootState) => state.auth)

  const [icon, setIcon] = React.useState<IconDefinition>(hasLoggedUserLiked() ? solidHeart : regularHeart)
  const [amountOfLikes, setAmountOfLikes] = React.useState<number>(comment.likes.length)

  const likePost = async () => {
    try {
      await AnimePostService.likeAnimePost(comment.id)
      setIcon(solidHeart)
      setAmountOfLikes(amountOfLikes + 1)
    } catch (error) {
      error.response.data.errors.full_messages.forEach(message => toast.error(message))
    }
  }

  const unlikePost = async () => {
    try {
      await AnimePostService.unlikeAnimePost(comment.id)
      setIcon(regularHeart)
      setAmountOfLikes(amountOfLikes - 1)
    } catch (error) {
      error.response.data.errors.full_messages.forEach(message => toast.error(message))
    }
  }

  function hasLoggedUserLiked(): boolean {
    if (!loggedUser) return null

    let filter_result = comment.likes.filter((like) => {
      return like.user_id == loggedUser.id
    })
    if (filter_result.length != 0) {
      return true
    }
    return false
  }

  return (
    <>
      <ClickableIcon
        icon={icon}
        onClick={() => {
          if (icon == regularHeart) {
            likePost()
          } else {
            unlikePost()
          }
        }}
      />
      {' ' + amountOfLikes}
    </>
  )
}
