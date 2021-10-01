import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../../../store/modules/rootReducer'
import { FollowButton } from './FollowButton'
import { UnfollowButton } from './UnfollowButton'
import { toast } from 'react-toastify'


export const FollowOrUnfollowButton = (props) => {

  const { favorites } = useSelector((state: RootState) => state.auth)

  const isUserFollowingAnime = (): boolean => {
    let following = false
    favorites.map(favoriteAnime => {
      if (favoriteAnime.mal_id == props.mal_id) {
        following = true
        return following
      }
    });
    return following
  }


  if (isUserFollowingAnime()) {
    return (
      <UnfollowButton />
    )
  }

  return (
    <FollowButton />
  )
}
