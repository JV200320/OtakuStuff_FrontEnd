import React from 'react'
import { UnauthenticatedHeader as Header } from '../components/Headers/Unauthenticated'
import { Main } from '../components/Main'

export default function HomeUnauthenticated() {

  const [animes, setAnimes] = React.useState(null)
  const [Loading, setLoading] = React.useState(true)

  return (
    <>
      <Header setLoading={setLoading} setAnimes={setAnimes} />
      <Main Loading={Loading} setLoading={setLoading} animes={animes} setAnimes={setAnimes} />
    </>
  )
}
