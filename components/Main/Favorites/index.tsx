import React from 'react'
import { Body } from '../Shared/Body'
import { NoFilterSearch } from '../Shared/Search'

export const Favorites = () => {

  let logged = true

  if (logged) {
    return (
      <>
        <Body>
          <NoFilterSearch look="animes em favoritos" />
        </Body>
      </>
    )
  }
  return (
    <>
      <Body>
        <div className="h-100 p-2 d-flex align-items-center">
          <h1 className="text-light text-center">Entre na sua conta ou se cadastre para ter acesso aos seus favoritos.</h1>
        </div>
      </Body>
    </>
  )

}
