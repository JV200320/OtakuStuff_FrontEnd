import React from 'react'
import { Search } from './styles'
import Anime from '../../../../dtos/Animes'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../store/modules/rootReducer'

interface SearchProps {
  look: string,
  setFollowing: React.Dispatch<React.SetStateAction<Anime[]>>,
  following: Anime[]
}

export const NoFilterFriendsSearch: React.FC<SearchProps> = ({ look, setFollowing, following }) => {

  const { following: allFollowing } = useSelector((state: RootState) => state.auth)

  const handleSearch = (searched: string) => {
    if (searched == '') {
      setFollowing(allFollowing)
      return
    }


    let searched_following = searchInFavoriteAnimes(searched.toLowerCase())
    setFollowing(searched_following)
  }

  const searchInFavoriteAnimes = (searched: string): Anime[] => {
    let searched_following: Anime[] = []
    for (let i = 0; i < allFollowing.length; i++) {
      let lowerTitle = allFollowing[i].title.toLowerCase()

      if (lowerTitle.includes(searched)) {
        searched_following.push(allFollowing[i])
      }
    }
    return searched_following
  }

  return (
    <div className="w-100 d-flex justify-content-center my-3">
      <Search placeholder={`${look}`}
        onChange={e => handleSearch(e.target.value)}
      />
    </div>
  )
}
