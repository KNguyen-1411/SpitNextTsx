import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/CarouselItem";
import style from "./Home.module.css";
import banner1 from "../../../../public/img/home/banner.png";
import banner2 from "../../../../public/img/home/banner1.png";
import { AosInit } from "@/utils/AosInit";
interface Home1Props {
  data?: any;
}
export default function Home1({}: Home1Props) {
  AosInit();
  return (
    <>
      <Container fluid className={`${style.home1} home1 `}>
        <Container
          style={{ minHeight: "calc(100vh - 66px)" }}
          className="d-flex align-items-lg-center align-items-start"
        >
          <div className={` ${style.ovl1} ovl1`}></div>
          <div className={` ${style.ovl2} ovl2`}></div>
          <div className={` ${style.ovl3} ovl3`}></div>
          <div className={`${style.mattroi}`}></div>
          <Row className="d-flex flex-column  flex-lg-row align-items-lg-center">
            <Col className={`my-5 ${style.aniLeft}`}>
              <Row className="text-center">
                <Col xs={12} className="hh h3 fw-bold fs-3 hh">
                  Giới thiệu
                </Col>
                <Col xs={12} className="h2 hh fw-bold fs-2 gradient-text">
                  CLB Hỗ Trợ Lập Trình SPIT
                </Col>
              </Row>
              <Row className="mt-4">
                <p style={{ fontSize: 15 }}>
                  <strong>CLB Hỗ trợ Lập trình</strong>
                  (Support Programming Information Technology, viết tắt SPIT)
                  Trường Đại học Khoa học Huế, được thành lập vào ngày dưới sự
                  chỉ đạo của Hội Sinh viên trường và ban cố vấn thuộc Khoa Công
                  nghệ thông tin Trường Đại học Khoa học, Đại học Huế.
                </p>
                <p className="mt-1 fs-4">
                  <strong>Slogan</strong> Lập trình khó có
                  <span
                    className="gradient-text"
                    style={{ fontWeight: "bold" }}
                  >
                    {" "}
                    SPIT{" "}
                  </span>{" "}
                  lo
                </p>
              </Row>
              <Row className="mt-3  mx-auto my-4">
                <Col className="d-flex justify-content-around ">
                  <Link
                    href="/intro"
                    className={`${style.btnxt} nav-link link-light shadow-sm`}
                  >
                    Xem thêm
                  </Link>
                  <Link
                    href="/join"
                    className={`${style.btnxt} nav-link link-light shadow-sm`}
                  >
                    Tham gia ngay
                  </Link>
                </Col>
              </Row>
            </Col>
            <Col className={` ${style.aniRight} mb-3`}>
              <Carousel
                fade
                controls={true}
                indicators={false}
                className={`${style.carousel} shadow-sm`}
              >
                <CarouselItem>
                  <Image
                    src={banner1}
                    alt="none"
                    className="w-100 h-100 rounded-2"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src={banner2}
                    alt="none"
                    className="w-100 h-100 rounded-2"
                  />
                </CarouselItem>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
