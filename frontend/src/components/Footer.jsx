import React from "react";
import { Container, Row, Col } from "react-bootstrap";
function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py3">Copyright © 2021</Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
