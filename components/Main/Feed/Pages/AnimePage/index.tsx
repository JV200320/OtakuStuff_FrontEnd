import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../../store/modules/rootReducer'
import { toast } from 'react-toastify'
import { useRouter } from 'next/dist/client/router'
import AnimeService from '../../../../../services/animes/getAnimes'

import { Row, Col } from 'react-bootstrap'
import { FollowOrUnfollowButton } from './FollowOrUnfollowButton'
import { CenterSpinner } from '../../../Shared/CenterSpinner'
import { Trailer } from './Trailer'
import { ProfileCol } from './ProfileCol'
import { Synopsis } from './Synopsis'
import { InfoRow } from './InfoRow'
import { CommentSection } from './CommentSection'


export const AnimePage: React.FC = () => {

  const router = useRouter()
  const loggedUser = useSelector((state: RootState) => state.auth)
  const [animeContent, setAnimeContent] = React.useState(null)
  const { anime_id } = router.query


  React.useEffect(() => {
    try {
      setAnimeContent(null)
      if (anime_id) {
        getAnimePageContent()
      }
    } catch (error) {
      error.response.data.errors.full_messages.forEach(message => toast.error(message))
    }
  }, [anime_id])


  const getAnimePageContent = async () => {
    let anime = await AnimeService.getAnimePageContent(anime_id as string)
    setAnimeContent(anime)
    console.log(animeContent)
  }

  const renderFollowOrUnfollowButton = () => {
    if (loggedUser) {
      return <FollowOrUnfollowButton {...animeContent} />
    }
    return null
  }


  if (animeContent == null)
    return <CenterSpinner />

  return (
    <div className="w-100 h-100 text-light">
      <Row>
        <ProfileCol
          image_url={animeContent.image_url}
          title={animeContent.title}
        />
        <Col lg={7}>
          <Synopsis synopsis={animeContent.synopsis} />
          {renderFollowOrUnfollowButton()}
        </Col>
      </Row>
      <InfoRow
        status={animeContent.status}
        source={animeContent.source}
        scored_by={animeContent.scored_by}
        rank={animeContent.rank}
        aired={animeContent.aired}
        score={animeContent.score}
        rating={animeContent.rating}
        episodes={animeContent.episodes}
        duration={animeContent.duration}
        genres={animeContent.genres}
      />
      <Trailer trailerUrl={animeContent.trailer_url} />
      <CommentSection />
    </div>
  )
}
