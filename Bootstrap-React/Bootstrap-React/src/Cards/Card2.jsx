import { Object2 } from "./Object2";
import { Object3 } from "./Object3";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function Card2() {
  return (
    <div>
      <Container className="mt-5">
        <Row className="gy-2">
          <h3 className="text-white text-center">React Bootstrap Task2</h3>
          {Object2.map((obj) => {
            return (
              <Col key={obj.id} sm={6} className="mt-2">
                <Card className="h-100" id="card">
                  <Card.Body>
                    <Card.Img src={obj.image} className="img" />
                    <Card.Title id="title">{obj.title}</Card.Title>
                    <Card.Subtitle id="sub">
                      {obj.date} - {obj.location}
                    </Card.Subtitle>
                    <Card.Text id="text">{obj.discription}</Card.Text>
                    <Button id="register-btn">Register</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
          {Object3.map((obj2) => {
            return (
              <Col key={obj2.id} sm={6} className="mt-2">
                <Card className="h-100" id="card">
                  <Card.Body>
                    <Card.Img src={obj2.image} className="img2" />
                    <Card.Text id="text">{obj2.text}</Card.Text>
                    <Card.Footer>
                      <p id="p" aria-readonly>
                        {obj2.name}
                      </p>
                    </Card.Footer>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Card2;
