import React from 'react'
import { LoginAndSingupHeader as Header } from '../components/Headers/LoginAndSignupHeader'
import { LoginForm } from '../components/Forms/LoginForm'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/dist/client/router'

const Login: React.FC = () => {

  const router = useRouter()
  const loggedUser = useSelector(state => state.auth)

  if (loggedUser) {
    router.push('/')
    return null
  }

  return (
    <>
      <Header link={['/SignUp', 'Cadastrar']} />
      <LoginForm />
    </>
  )
}
export default Login