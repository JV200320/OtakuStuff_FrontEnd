import React from 'react'
import { useDispatch } from 'react-redux'
import { Header } from '../components/Headers/MainHeader'
import { Main } from '../components/Main'
import { setContentPageToDisplay } from '../store/modules/contentPageToDisplay/reducer'
import { setKindOfContentListToDisplay } from '../store/modules/kindOfContentListToDisplay/reducer'

const Home: React.FC = () => {

  const [content, setContent] = React.useState(null)
  const [Loading, setLoading] = React.useState(true)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(setKindOfContentListToDisplay('animes'))
    dispatch(setContentPageToDisplay(null))
  }, [])

  return (
    <>
      <Header {...{ setContent, setLoading }} />
      <Main {...{ Loading, setLoading, content, setContent }} />
    </>
  )
}
export default Home;