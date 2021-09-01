import React from 'react'
import { LoginAndSingupHeader as Header } from '../components/Headers/LoginAndSignupHeader'
import { SignUpForm } from '../components/Forms/SignupForm'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/dist/client/router'

const SignUp: React.FC = () => {

  const router = useRouter()
  const loggedUser = useSelector(state => state.auth)

  if (loggedUser) {
    router.push('/')
    return null
  }

  return (
    <>
      <Header link={['/Login', 'Entrar']} />
      <SignUpForm />
    </>
  )
}
export default SignUp