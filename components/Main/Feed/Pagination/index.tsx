import React from 'react'
import styles from './styles.module.css'
import { Botao } from './styles'
import { useRouter } from 'next/dist/client/router'

interface Props {
  basePath: string
}

export const Pagination: React.FC<Props> = ({ basePath }) => {

  const router = useRouter()
  const [page, setPage] = React.useState(null)

  React.useEffect(() => {
    let { page } = router.query
    if (page) {
      setPage(page)
    } else {
      setPage(1)
    }
  }, [router.query])

  const getPageContent = async (page: number) => {
    document.getElementById('page_input').blur()
    if (hasOtherParam()) {
      router.push(`${basePath}&page=${page}`)
      return
    }
    router.push(`${basePath}?page=${page}`)
  }

  const nextPage = async () => {
    setPage(Number(page) + 1)
    if (hasOtherParam()) {
      router.push(`${basePath}&page=${Number(page) + 1}`)
      return
    }
    router.push(`${basePath}?page=${Number(page) + 1}`)
  }

  const previousPage = async () => {
    setPage(Number(page) - 1)
    if (hasOtherParam()) {
      router.push(`${basePath}&page=${Number(page) - 1}`)
      return
    }
    router.push(`${basePath}?page=${Number(page) - 1}`)
  }

  const hasOtherParam = (): boolean => {
    return basePath.includes('?')
  }

  if (Number(router.query['page']) == 1 || !router.query['page']) {
    return (
      <div className="fixed-bottom offset-lg-3 col-lg-6 col-12 text-center text-light" style={{ backgroundColor: '#303030' }}>
        <Botao onClick={() => nextPage()}>Próximo</Botao>
      </div>
    )
  }
  else {
    return (
      <div className="fixed-bottom offset-lg-3 col-lg-6 col-12 text-center text-light" style={{ backgroundColor: '#303030' }}>
        <Botao onClick={() => previousPage()}>Anterior</Botao> |
        <input type="number" id="page_input" value={page} onChange={e => setPage(Number(e.target.value))}
          onKeyPress={(e) => e.key === 'Enter' && getPageContent(page)}
          className={`bg-transparent border-0 text-light text-center ${styles.hidden_arrow}`} style={{ width: 30 }} />
        | <Botao onClick={() => nextPage()}>Próximo</Botao>
      </div>
    )
  }
}
