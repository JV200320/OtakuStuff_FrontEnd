import React from "react"
import { MainDiv, Center, FormDiv, SubmitButton, StyledInput, HoverableImage, ImageFilter } from "./styles"
import { Row, Col, Form } from "react-bootstrap"
import UserService from "../../../services/auth/user"
import { useRouter } from "next/dist/client/router"
import { toast } from "react-toastify"

export const LoginForm: React.FC = () => {

  const router = useRouter()

  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  const handleSubmit = async () => {

    const formData = new FormData();
    formData.append('email', email)
    formData.append('password', password)
    try {
      let res = await UserService.login(formData)
      toast.success('Login realizado com sucesso.')
      router.push('/')
    } catch (error) {
      error.response.data.errors.full_messages.forEach(message => toast.error(message))
    }
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
                  <StyledInput required type="email" placeholder="Email"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3 justify-content-center d-flex" controlId="formBasicPassword">
                  <StyledInput required type="password" placeholder="Senha"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
                </Form.Group>

              </Form>
            </Col>
          </Row>
          <Row className="w-100 d-flex justify-content-center">
            <SubmitButton onClick={() => handleSubmit()}>Entrar</SubmitButton>
          </Row>
        </FormDiv>
      </Center>
    </MainDiv>
  )
}
