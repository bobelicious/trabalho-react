import { Carousel, Col, Row, Container } from "react-bootstrap";

function Carrossel() {
  return (
    <Container>
      <Row style={{marginBottom:"50px"}}>
        <Col>
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://tm.ibxk.com.br/2021/08/06/06151102034035.jpg?ims=1120x420"
                alt="First slide"
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://cdn2.unrealengine.com/Diesel%2Fblog%2Fspring-2020-update%2FEGS_GDC_Social_News_Secondary2-1920x600-e0908ca73e4cd88024bc49c9cf4a278bcf266321.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://p2.trrsf.com/image/fget/cf/1200/628/middle/images.terra.com/2021/09/16/epic-games-store-capa.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default Carrossel;
