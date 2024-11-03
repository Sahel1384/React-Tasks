import "./Cards.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { CardData } from "./Object1";

function Card1() {
  return (
    <>
      <Container className="mt-2">
        <Row className="gy-2">
          <h3 className="text-white text-center">React Bootstrap Task1</h3>
          {CardData.map((items) => {
            return (
              <Col sm={6} md={4} lg={3} className="mt-2" key={items.courseId}>
                <Card className="h-100" id="card">
                  <Card.Body>
                    <Card.Img src={items.courseImg} className="img" />
                    <Card.Title id="title">{items.courseName}</Card.Title>
                    <Card.Subtitle id="sub">{items.teacher}</Card.Subtitle>
                    <Card.Text id="text">{items.discription}</Card.Text>
                    <Button id="button">Learn More</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default Card1;
