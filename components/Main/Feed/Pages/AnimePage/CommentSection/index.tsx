import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { NoComment } from './NoComment'
import { AnimePost } from '../../../../../../dtos/Posts'
import AnimePostService from '../../../../../../services/posts/getAnimePosts'
import { CommentComponent } from './CommentComponent'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../../../store/modules/rootReducer'


export const CommentSection = () => {

  const router = useRouter()
  const [animePosts, setAnimePosts] = React.useState<AnimePost[]>()
  const loggedUser = useSelector((state: RootState) => state.auth)

  React.useEffect(() => {
    getComments()
  }, [])

  const getComments = async () => {
    let { anime_id } = router.query
    let posts = await AnimePostService.getAnimePost(anime_id as string)
    setAnimePosts(posts)
  }

  const loggedUserOwnsPost = (post: AnimePost): boolean => {
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

  return (
    <>
      {renderComments()}
    </>
  )
}
