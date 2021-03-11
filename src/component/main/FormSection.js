import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
function FormSection() {
  return (
    <div className="form-about">
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <input type="text" placeholder="E-mail" />
          </Col>
          <Col xs={12} md={6} lg={6}>
            <input type="text" placeholder="Title" />
          </Col>
          <Col>
            <textarea name="massage" placeholder="Massage"></textarea>
          </Col>
        </Row>
        <Row>
          <button className="form-btn">Send</button>
        </Row>
      </Container>
    </div>
  );
}
export default FormSection;
