import React from 'react'
import { LoginAndSingupHeader as Header } from '../components/Headers/LoginAndSignupHeader'
import { LoginForm } from '../components/Forms/LoginForm'

const Login: React.FC = () => {
  return (
    <>
      <Header link={['/SignUp', 'Cadastrar']} />
      <LoginForm />
    </>
  )
}
export default Login