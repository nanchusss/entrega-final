import React from "react";
import {
  StyledHeader,
  StyledImage,
  StyledTitle,
  StyledSubtitle,
  Fondo,
  GridItem,
  Grid,
  Image,
  Title,
  Container2,
  Btn,
  StyledButton,
  ContainerSection,
  CustomCard,
  CustomCardImg,
  CustomCardTitle,
  CustomCardText,
} from "./PaintPage-Styles";
import { Container, Row, Col } from "react-bootstrap";
import Image2 from "..//..//PaintPage/PaintPage/images/mujer.jpg";
import ofrecer1 from "..//PaintPage/images/ofrecer1.svg";
import ofrecer2 from "..//PaintPage/images/klipartz.com-_50_.svg";
import ofrecer3 from "..//PaintPage/images/ofrecer3.svg";
import ofrecer4 from "..//PaintPage/images/ofrecer4.svg";
import pensamosenti1 from "..//PaintPage/images/diseno-interiores-sala-estar-moderna-mediados-siglo-arbol-monstera.jpg";
import pensamosenti2 from "..//PaintPage/images/blog.jpg";
import pensamosenti3 from "..//PaintPage/images/contact.jpg";
import { useContext } from "react";
import { MyContext } from "../../../Context";

const PaintPage = () => {
  //acá pongo la constante si está loggeado el usuario o no. y luego la voy a poner como condicional para que si está loggeado me haga el onclick y si no me redirija
  const isLoggedIn = localStorage.getItem("email");
  const {
    handleState,
    state,
    handleShowBlog,
    handleShowQuizz,
    handleShowForm,
  } = useContext(MyContext);
  return (
    <>
      <StyledHeader>
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <StyledImage src={Image2} alt="Logo" />
            </Col>
            <Col
              xs={12}
              md={6}
              className="d-flex justify-content-center align-items-center"
            >
              <Btn onClick={handleShowQuizz}>Cotiza Online!</Btn>
            </Col>
          </Row>
        </Container>
      </StyledHeader>
      <Fondo>
        <Container>
          <Row>
            <Col>
              <StyledTitle>¿Necesitas pintar tu casa o negocio?</StyledTitle>
              <StyledSubtitle>
                ¡Contáctanos y solicita tu cotización ahora mismo!
              </StyledSubtitle>
            </Col>
          </Row>
        </Container>
      </Fondo>
      <StyledButton variant="primary" onClick={handleShowQuizz}>
        Solicitar cotización
      </StyledButton>
      <Container2>
        <Title>Qué podemos ofrecerte?</Title>
        <Grid>
          <GridItem>
            <Image src={ofrecer1} />
            <StyledSubtitle>
              Servicio de pintado de casas, pisos, techos y paredes
            </StyledSubtitle>
          </GridItem>
          <GridItem>
            <Image src={ofrecer2} />
            <StyledSubtitle>
              Servicio de pintado de comercios, locales, restaurantes y hoteles
            </StyledSubtitle>
          </GridItem>
          <GridItem>
            <Image src={ofrecer3} />
            <StyledSubtitle>
              Servicio de pintado de oficinas y otras instalaciones
            </StyledSubtitle>
          </GridItem>
          <GridItem>
            <Image src={ofrecer4} />
            <StyledSubtitle>
              Pinturas decorativas y artísticas para los espacios, vinilos y
              mucho más!
            </StyledSubtitle>
          </GridItem>
        </Grid>
      </Container2>
      <ContainerSection>
        <Container>
          <Title>Porque pensamos en tí</Title>
          <Row>
            <Col md={4}>
              <CustomCard onClick={handleState} state={state}>
                <CustomCardImg variant="top" src={pensamosenti1} />
                <CustomCardTitle>Inspírate!</CustomCardTitle>
                <CustomCardText>
                  Explora nuestra sección de Inspírate para obtener imagenes de
                  interiores novedosos y llenos de energía.
                </CustomCardText>
              </CustomCard>
            </Col>
            <Col md={4}>
              <CustomCard onClick={handleShowBlog}>
                <CustomCardImg variant="top" src={pensamosenti2} />
                <CustomCardTitle>Blog</CustomCardTitle>
                <CustomCardText>
                  Novedades, artículos, consejos y mucho más para que le saques
                  partido a tus renovaciones.
                </CustomCardText>
              </CustomCard>
            </Col>
            <Col md={4}>
              <CustomCard onClick={handleShowForm}>
                <CustomCardImg variant="top" src={pensamosenti3} />
                <CustomCardTitle>Contacta con nosotros</CustomCardTitle>
                <CustomCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CustomCardText>
              </CustomCard>
            </Col>
          </Row>
        </Container>
      </ContainerSection>
    </>
  );
};

export default PaintPage;
