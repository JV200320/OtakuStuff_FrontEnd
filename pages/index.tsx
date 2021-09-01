import React from 'react'
import { useDispatch } from 'react-redux'
import { UnauthenticatedHeader as Header } from '../components/Headers/Unauthenticated'
import { Main } from '../components/Main'
import { setFilter } from '../store/modules/filter/reducer'

export default function Home() {

  const [content, setContent] = React.useState(null)
  const [Loading, setLoading] = React.useState(true)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(setFilter('animes'))
  }, [])

  return (
    <>
      <Header {...{ setContent, setLoading }} />
      <Main {...{ Loading, setLoading, content, setContent }} />
    </>
  )
}
