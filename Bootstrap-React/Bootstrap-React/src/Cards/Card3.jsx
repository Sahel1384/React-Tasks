import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Object4 } from "./Object4";

function Card3() {
  return (
    <div>
      <Container className="mt-5">
        <Row className="gy-2">
          <h3 className="text-white text-center">React Bootstrap Task3</h3>

          {Object4.map((obj3) => {
            return (
              <Col
                key={obj3.id}
                sm={12}
                className="mt-2 d-flex justify-content-center align-items-center"
              >
                <Card className="h-100 w-50" id="card">
                  <Card.Body>
                    <Card.Img src={obj3.image} className="img2" />
                    <Card.Title id="text">{obj3.title}</Card.Title>
                    <ListGroup>
                      {obj3.ingredients.map((all, index) => {
                        return (
                          <ListGroup.Item
                            key={index}
                            className="bg-dark text-white"
                          >
                            {all}
                          </ListGroup.Item>
                        );
                      })}
                    </ListGroup>
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

export default Card3;
