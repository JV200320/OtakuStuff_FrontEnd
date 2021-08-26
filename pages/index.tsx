import React from 'react'
import { UnauthenticatedHeader as Header } from '../components/Headers/Unauthenticated'
import { Main } from '../components/Main'

export default function HomeUnauthenticated() {

  const [Loading, setLoading] = React.useState(true)

  return (
    <>
      <Header setLoading={setLoading} />
      <Main Loading={Loading} setLoading={setLoading} />
    </>
  )
}
