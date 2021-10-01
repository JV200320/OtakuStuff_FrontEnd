import React from 'react'
import { UserComponent } from '../Components/UserComponent'
import { CenterSpinner } from '../../../Shared/CenterSpinner'
import { useRouter } from 'next/dist/client/router'
import UserService from '../../../../../services/users'
import { toast } from 'react-toastify'
import { NoContent } from '../../NoContent'


export const SearchUsers: React.FC = () => {

  const router = useRouter()
  const [searchedUsers, setSearchedUsers] = React.useState(null)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    try {
      getSearchedUsers()
      setLoading(false)
    } catch (error) {
      error.response.data.errors.full_messages.forEach(message => toast.error(message))
    }
  }, [router.query])


  const getSearchedUsers = async () => {
    let users;
    users = await UserService.searchUser({ ...router.query })
    setSearchedUsers(users)
  }


  const renderContent = () => {
    let noUserFound = !searchedUsers || searchedUsers.length < 1

    if (noUserFound) {
      return <NoContent />
    }


    return searchedUsers.map((user, i) => {
      return (
        <UserComponent image={user.image} recentFavorites={getRecentFavorites(user.favorites)} id={user.id} nickname={user.nickname} bio={user.bio} key={i} />
      )
    })
  }

  const getRecentFavorites = (favorites) => {
    favorites = favorites.slice(0, 3)
    favorites = getTitles(favorites)
    return favorites
  }

  const getTitles = (favorites) => {
    return favorites = favorites.map((favorites) => {
      return favorites['title']
    })
  }

  return (
    <>
      {searchedUsers ? renderContent() : <CenterSpinner />}
    </>
  )
}
