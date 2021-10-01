import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { Header } from '../../components/Headers/MainHeader'
import { Main } from '../../components/Main'
import { AnimePage as Page } from '../../components/Main/Feed/Pages/AnimePage'


const AnimePage = () => {

  const router = useRouter()
  const { anime_id } = router.query
  const [Loading, setLoading] = React.useState(true)



  return (
    <>
      <Header />
      <Main {...{ Loading, setLoading }}>
        <Page />
      </Main>
    </>
  )
}
export default AnimePage