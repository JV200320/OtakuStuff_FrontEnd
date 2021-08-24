import React from 'react'
import { LoginAndSingupHeader as Header } from '../components/Headers/LoginAndSignupHeader'
import { SignUpForm } from '../components/Forms/SignupForm'

const SignUp: React.FC = () => {
  return (
    <>
      <Header link={['/Login', 'Entrar']} />
      <SignUpForm />
    </>
  )
}
export default SignUp