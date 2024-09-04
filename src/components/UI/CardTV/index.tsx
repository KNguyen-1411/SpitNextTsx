"use client";
import React from "react";
import { Container, Row } from "react-bootstrap";
import { useAppData } from "@/context";
import Card from "./Card";
export default function CardTV() {
  const { members } = useAppData();
  return (
    <Container fluid className="my-3">
      {members.map((menber, index) => {
        return (
          <div key={index}>
            <h2 className="col hh fw-bold gachngang">Khoá: {index + 1}</h2>
            <Row>
              {menber.member.map((item, index) => {
                return <Card key={index} {...item} />;
              })}
            </Row>
          </div>
        );
      })}
    </Container>
  );
}
