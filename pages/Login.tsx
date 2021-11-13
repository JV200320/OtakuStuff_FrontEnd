import React from 'react'
import { LoginAndSingupHeader as Header } from '../components/Headers/LoginAndSignupHeader'
import { LoginForm } from '../components/Forms/LoginForm'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/dist/client/router'
import { RootState } from '../store/modules/rootReducer'
import { IUser } from '../dtos/User'

const Login: React.FC = () => {

  const router = useRouter()
  const loggedUser: null | IUser = useSelector((state: RootState) => state.auth)

  if (loggedUser) {
    router.push('/')
    return null
  }

  return (
    <>
      <Header link='/SignUp' buttonName='Cadastrar' />
      <LoginForm />
    </>
  )
}
export default Login