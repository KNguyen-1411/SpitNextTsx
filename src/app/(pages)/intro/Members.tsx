import CardTV from "@/components/UI/CardTV";
import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
export default function Members() {
  return (
    <Container fluid className="py-4 ">
      <Row>
        <Col xs={12}>
          <h2 className="fw-bold hh">Thành viên các khoá:</h2>
          <p className="text-muted" style={{ fontSize: 15 }}>
            Nhấn vào thành viên để xem chi tiết.
          </p>
        </Col>
        <Col xs={12}>
          <CardTV />
        </Col>
      </Row>
    </Container>
  );
}
