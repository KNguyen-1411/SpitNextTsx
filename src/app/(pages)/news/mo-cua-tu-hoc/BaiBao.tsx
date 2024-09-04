"use client";
import { usePathname } from "next/navigation";
import NewsData from "@/data/Local/News.json";
import { notFound } from "next/navigation";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
export default function BaiBao() {
  const pathname = usePathname();
  const news = NewsData.find((item) => `/news/${item.name}` === `${pathname}`);
  const src = `../img/news/mo-cua-tuhoc.png`;
  if (news === undefined) {
    notFound();
  }
  return (
    <Container className="my-2 py-3 border">
      <Row className="mb-4">
        <h1 className="text-center">{news?.title}</h1>
        <div>
          <hr />
        </div>
      </Row>
      <Row className="text-center">
        <Col xs={12}>
          <h4>{news?.content}</h4>
        </Col>
        <Col xs={12}>
          <p>{news?.content1}</p>
        </Col>
        <Col xs={12}>
          <Image
            src={src}
            width={1000}
            height={500}
            alt="none"
            className="w-50 h-100 mx-auto d-block"
          />
        </Col>
        <Col xs={12}>
          <p>{news?.content2}</p>
        </Col>
      </Row>
    </Container>
  );
}
