import React from 'react'
import AnimeService from '../../../services/animes/getAnimes'
import styles from './styles.module.css'
import { Botao } from './styles'

export const PageControl = ({ setLoading, setContent, content }) => {

  const [page, setPage] = React.useState(1)

  const getPageAnime = async (page) => {
    document.getElementById('page_input').blur()
    setLoading(true)
    let animes = await AnimeService.getTopAnime({ page: page })
    if (animes.length == 0) {
      alert("Erro ao se comunicar com o servidor, tente novamente.")
      setLoading(false)
      return
    }
    setContent(animes)
    setLoading(false)
  }

  const updateAnimesNext = async () => {
    setLoading(true)
    let animes = await AnimeService.getTopAnime({ page: page + 1 })
    if (animes.length == 0) {
      alert("Erro ao se comunicar com o servidor, tente novamente.")
      setLoading(false)
      return
    }
    setContent(animes)
    setLoading(false)
    document.getElementById("mainView").scrollTo(0, 0)
    setPage(page + 1)
  }

  const updateAnimesBefore = async () => {
    if (page > 1) {
      setLoading(true)
      let animes = await AnimeService.getTopAnime({ page: page - 1 })
      if (animes.length == 0) {
        alert("Erro ao se comunicar com o servidor, tente novamente.")
        setLoading(false)
        return
      }
      setContent(animes)
      setLoading(false)
      document.getElementById("mainView").scrollTo(0, 0)
      setPage(page - 1)
    }
  }

  if (content == null) return null
  if (content.length >= 1) {
    if (content[0]['rank'] == 1) {
      return (
        <div className="fixed-bottom offset-lg-3 col-lg-6 col-12 text-center text-light" style={{ backgroundColor: '#303030' }}>
          <Botao onClick={() => updateAnimesNext()}>Próximo</Botao>
        </div>
      )
    } else {
      return (
        <div className="fixed-bottom offset-lg-3 col-lg-6 col-12 text-center text-light" style={{ backgroundColor: '#303030' }}>
          <Botao onClick={() => updateAnimesBefore()}>Anterior</Botao> |
          <input type="number" id="page_input" value={page} onChange={e => setPage(Number(e.target.value))}
            onKeyPress={(e) => e.key === 'Enter' && getPageAnime(page)}
            className={`bg-transparent border-0 text-light text-center ${styles.hidden_arrow}`} style={{ width: 30 }} />
          | <Botao onClick={() => updateAnimesNext()}>Próximo</Botao>
        </div>
      )
    }
  }
}
