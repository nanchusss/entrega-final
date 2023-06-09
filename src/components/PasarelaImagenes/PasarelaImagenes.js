import Carousel from "react-bootstrap/Carousel";
import CarouselItem1 from "../PasarelaImagenes/Images/Pincel.jpg";
import CarouselItem2 from "../PasarelaImagenes/Images/interior.jpg";
import CarouselItem3 from "../PasarelaImagenes/Images/mujer.jpg";
import { Imagen, Pasarela, Subtitulo, Titulo } from "./PasarelaImagenes-styles";

function PasarelaImagenes() {
  return (
    <Pasarela fade>
      <Carousel.Item>
        <Imagen
          className="d-block w-100"
          src={CarouselItem1}
          alt="First slide"
        />
        <Carousel.Caption>
          <Titulo>Quieres renovar tu casa?</Titulo>
          <Subtitulo>
            {" "}
            Pintura profesional para obras y empresas en Barcelona.
          </Subtitulo>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Imagen
          className="d-block w-100"
          src={CarouselItem3}
          alt="Second slide"
        />

        <Carousel.Caption>
          <Titulo>Cruz del Sur</Titulo>
          <Subtitulo>"Colores que inspiran, calidad que perdura"</Subtitulo>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Imagen
          className="d-block w-100"
          src={CarouselItem2}
          alt="Third slide"
        />

        <Carousel.Caption>
          <Titulo>Inspírate y crea</Titulo>
          <Subtitulo>
            Dale vida a tus proyectos con los colores de Cruz del Sur.
          </Subtitulo>
        </Carousel.Caption>
      </Carousel.Item>
    </Pasarela>
  );
}

export default PasarelaImagenes;
