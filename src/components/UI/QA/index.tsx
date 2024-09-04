"use client";
import React, { useState } from "react";
import { useAppData } from "@/context";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import AccordionItem from "react-bootstrap/AccordionItem";
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionBody from "react-bootstrap/AccordionBody";
import DOMPurify from "dompurify";

export default function QAComponent() {
  const { qas } = useAppData();
  const QA = qas;
  const [openStates, setOpenStates] = useState(Array(QA.length).fill(false));

  const toggleOpen = (index: number) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };

  return (
    <Container className="py-4 my-5 bg-qa rounded-3">
      <Row className="text-center mb-4">
        <h1 className="hh fw-bold" style={{ fontSize: 40 }}>
          Q & A
        </h1>
      </Row>
      <Row>
        <Col>
          <Accordion>
            {QA.map((item, index) => (
              <AccordionItem key={index} eventKey={index.toString()}>
                <AccordionHeader onClick={() => toggleOpen(index)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chat-dots-fill me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                  </svg>
                  {item.question}
                </AccordionHeader>

                <AccordionBody>
                  {openStates[index] && item.answer && (
                    <p
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(item.answer),
                      }}
                    />
                  )}
                  {openStates[index] && !item.answer && (
                    <p className="text-muted">Không có câu trả lời.</p>
                  )}
                </AccordionBody>
              </AccordionItem>
            ))}
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}
