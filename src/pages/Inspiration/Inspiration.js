import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

function InspirationPage() {
  const [palettes, setPalettes] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    console.log("hola estoy usando useEffect");
    const fetchPalettes = async () => {
      const randomHex = Math.floor(Math.random() * 16777215).toString(16);
      const result = await axios(
        `https://www.thecolorapi.com/scheme?format=json&count=6&scheme=analogic&hex=${randomHex}`
      );
      setPalettes(result.data.colors);
    };
    fetchPalettes();
  }, []);

  useEffect(() => {
    // pre-cargar imágenes
    palettes.forEach((palette) => {
      const img = new Image();
      img.src = `https://www.thecolorapi.com${palette.image.bare}`;
    });
  }, [palettes]);

  const handleCardClick = async () => {
    console.log("Esta andando el handleclick de las fotos");
    try {
      const randomPage = Math.floor(Math.random() * 10) + 1;
      const result = await axios(
        `https://api.unsplash.com/search/photos?query=interior+color&per_page=10&page=${randomPage}`,
        {
          headers: {
            Authorization:
              "Client-ID Yme6ZcumIXpWryQ0DPc249CE0ua2Mxh66Y-4W2gPAAc",
          },
        }
      );
      setImages(result.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const handleMoreColorsClick = async () => {
    const randomHex = Math.floor(Math.random() * 16777215).toString(16);
    const result = await axios(
      `https://www.thecolorapi.com/scheme?format=json&count=6&scheme=analogic&hex=${randomHex}`
    );
    setPalettes(result.data.colors);
  };

  return (
    <div className="py-5">
      <Container>
        <h1 className="text-center mb-5">Inspírate</h1>
        <Row>
          {palettes.map((palette, index) => (
            <Col md={4} key={index}>
              <Card className="mb-4" onClick={() => handleCardClick()}>
                <Card.Img variant="top" src={palette.image.named} />
                <Card.Body>
                  <Card.Title>{palette.name.value}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row>
          <Col className="text-center mb-5">
            <button
              className="btn btn-primary mt-3 mr-3"
              onClick={() => handleMoreColorsClick()}
            >
              Ver más colores
            </button>
            <button
              className="btn btn-primary mt-3"
              onClick={() => handleCardClick()}
            >
              Inspírate con imágenes únicas
            </button>
          </Col>
          <Col md={{ span: 8, offset: 2 }}>
            <Carousel className="custom-carousel">
              {images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100 custom-image"
                    src={image.urls.regular}
                    alt={image.alt_description}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default InspirationPage;