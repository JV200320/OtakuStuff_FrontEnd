import React from 'react'
import { Body } from '../Shared/Body'
import { NoFilterFriendsSearch } from './NoFilterFriendsSearch'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/modules/rootReducer'
import User from '../../../dtos/User'

export const Friends = () => {

  const loggedUser: null | User = useSelector((state: RootState) => state.auth)

  if (loggedUser) {
    return (
      <Body>
        <NoFilterFriendsSearch look="Seguindo" />
      </Body>
    )
  }
  return (
    <Body>
      <div className="h-100 p-2 d-flex align-items-center">
        <h1 className="text-light text-center">Entre na sua conta ou se cadastre para ter acesso aos seus amigos.</h1>
      </div>
    </Body>
  )
}
