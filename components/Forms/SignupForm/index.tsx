import React from "react"
import { MainDiv, Center, FormDiv, SubmitButton, StyledInput, HoverableImage } from "./styles"
import { Row, Col, Form } from "react-bootstrap"
import Image from "next/image"

export const SignUpForm: React.FC = () => {
  return (
    <MainDiv>
      <Center lg={{ span: 8, offset: 2 }}>
        <FormDiv>
          <Row>
            <h1>Cadastrar</h1>
          </Row>
          <Row className="w-100">
            <Col className="justify-content-center align-items-center d-flex">
              <HoverableImage src="https://cdn.myanimelist.net/images/anime/13/17405.jpg">

              </HoverableImage>
              {/* <Image
                className="rounded-circle py-2"
                src="https://cdn.myanimelist.net/images/anime/13/17405.jpg"
                width={400}
                height={400}
              /> */}
            </Col>
            <Col className="d-flex justify-content-center">
              <Form className="w-100 d-flex flex-column justify-content-around">
                <Form.Group className="mb-3 justify-content-center d-flex" controlId="formBasicNickname">
                  <StyledInput type="text" placeholder="Nickname" />
                </Form.Group>

                <Form.Group className="mb-3 justify-content-center d-flex" controlId="formBasicEmail">
                  <StyledInput type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3 justify-content-center d-flex" controlId="formBasicPassword">
                  <StyledInput type="text" placeholder="Senha" />
                </Form.Group>

                <Form.Group className="mb-3 justify-content-center d-flex" controlId="formBasicConfirmPassword">
                  <StyledInput type="password" placeholder="Confirmar senha" />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row className="w-100 d-flex justify-content-center">
            <SubmitButton>Cadastrar</SubmitButton>
          </Row>
        </FormDiv>
      </Center>
    </MainDiv>
  )
}
