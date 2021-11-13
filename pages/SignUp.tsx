import React from 'react'
import { LoginAndSingupHeader as Header } from '../components/Headers/LoginAndSignupHeader'
import { SignUpForm } from '../components/Forms/SignupForm'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/dist/client/router'
import { IUser } from '../dtos/User'
import { RootState } from '../store/modules/rootReducer'

const SignUp: React.FC = () => {

  const router = useRouter()
  const loggedUser: null | IUser = useSelector((state: RootState) => state.auth)

  if (loggedUser) {
    router.push('/')
    return null
  }

  return (
    <>
      <Header link='/Login' buttonName='Entrar' />
      <SignUpForm />
    </>
  )
}
export default SignUp