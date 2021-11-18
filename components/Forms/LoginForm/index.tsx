import React from "react"
import { MainDiv, Center, FormDiv } from "../styles"
import { Row, Col, Form } from "react-bootstrap"
import AuthService from "../../../services/auth"
import { useRouter } from "next/dist/client/router"
import { toast } from "react-toastify"
import { useDispatch } from "react-redux"
import { setLoggedUser } from "../../../store/modules/auth/reducer"
import { IUser } from "../../../dtos/User"
import { StyledButton } from "../../Shared/StyledButton"
import { Theme } from "../../../styles/theme"
import { StyledInput } from "../../Shared/StyledInput"

export const LoginForm: React.FC = () => {

  const router = useRouter()
  const dispatch = useDispatch()

  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  const formData: FormData = new FormData();

  const handleSubmit = async () => {
    try {
      await loginUser()
      toast.success('Login realizado com sucesso.')
      router.push('/')
    } catch (error) {
      error.response.data.errors.full_messages?.forEach(message => toast.error(message))
      error.response.data.errors?.forEach(message => toast.error(message))
    }
  }

  const loginUser = async () => {
    appendDataToForm()
    let user: IUser = await getUser()
    dispatch(setLoggedUser(user))
  }

  const appendDataToForm = () => {
    formData.append('email', email)
    formData.append('password', password)
  }

  const getUser = async (): Promise<IUser> => {
    let user: IUser = await AuthService.login(formData)
    return user
  }

  return (
    <MainDiv>
      <Center lg={{ span: 8, offset: 2 }}>
        <FormDiv>
          <Row>
            <h1>Entrar</h1>
          </Row>
          <Row className="w-100">
            <Col className="d-flex justify-content-center">
              <Form className="w-100 d-flex flex-column justify-content-around">

                <Form.Group className="mb-3 justify-content-center d-flex" controlId="formBasicEmail">
                  <StyledInput
                    required
                    type="email"
                    placeholder="Email"
                    width='65%'
                    borderColor={Theme.appColors.loggedOff}
                    color={Theme.appColors.loggedOff}
                    shadow={Theme.appShadows.loggedOff}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3 justify-content-center d-flex" controlId="formBasicPassword">
                  <StyledInput
                    required
                    type="password"
                    placeholder="Senha"
                    width='65%'
                    borderColor={Theme.appColors.loggedOff}
                    color={Theme.appColors.loggedOff}
                    shadow={Theme.appShadows.loggedOff}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
                </Form.Group>

              </Form>
            </Col>
          </Row>
          <Row className="w-100 d-flex justify-content-center">
            <StyledButton
              onClick={() => handleSubmit()}
              text='Entrar'
              backgroundColor={Theme.appColors.loggedOff}
              outlined
              color={Theme.appColors.loggedOff}
              hoverTextColor={Theme.appColors.white}
              width='55%'
            />
          </Row>
        </FormDiv>
      </Center>
    </MainDiv>
  )
}
