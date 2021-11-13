import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { NoComment } from './NoComment'
import { IAnimePost } from '../../../../../../dtos/Posts'
import AnimePostService from '../../../../../../services/posts/AnimePosts'
import { CommentComponent } from './CommentComponent'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../../../store/modules/rootReducer'
import { AddComment } from './AddComment'


export const CommentSection = () => {

  const router = useRouter()
  const [animePosts, setAnimePosts] = React.useState<IAnimePost[]>()
  const loggedUser = useSelector((state: RootState) => state.auth)

  React.useEffect(() => {
    getComments()
  }, [])

  const getComments = async () => {
    let { anime_id } = router.query
    let posts = await AnimePostService.getAnimePost(anime_id as string)
    posts.reverse()
    setAnimePosts(posts)
  }

  const loggedUserOwnsPost = (post: IAnimePost): boolean => {
    if (!loggedUser) return false


    if (loggedUser.id == post.user_id) {
      return true
    }
    return false
  }

  const renderComments = (): JSX.Element[] | JSX.Element => {
    if (!animePosts || animePosts.length == 0) return <NoComment />


    return animePosts.map((post, i) => (
      <CommentComponent {...{ post }} key={i} owner={loggedUserOwnsPost(post)} />
    ))
  }

  const renderAddComment = (): JSX.Element | null => {
    if (loggedUser) {
      return <AddComment updateComments={getComments} />
    }

    return null
  }

  return (
    <>
      {renderAddComment()}
      {renderComments()}
    </>
  )
}
