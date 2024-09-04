"use client";
import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/CarouselItem";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import banner1 from "../../../../public/img/home/banner.png";
import banner2 from "../../../../public/img/home/banner1.png";
import logo from "../../../../public/logo.png";
import Image from "next/image";
import About from "./About";
import Contact from "./Contact";
import Intro from "./Intro";
import Members from "./Members";
import CoCau from "./CoCau";
export default function IntroMain() {
  return (
    <>
      <Container className=" text-center p-0" fluid style={{ marginTop: -65 }}>
        <Carousel
          fade
          controls={false}
          indicators={false}
          className={` shadow-sm`}
        >
          <CarouselItem>
            <Image src={banner1} alt="none" className="img-intro-custom " />
          </CarouselItem>
          <CarouselItem>
            <Image src={banner2} alt="none" className="img-intro-custom " />
          </CarouselItem>
        </Carousel>
      </Container>
      <Container>
        <Row className="pt-2">
          <Col
            xs={12}
            lg={3}
            style={{ marginTop: -60, zIndex: 111 }}
            className="d-flex justify-content-center mb-2"
          >
            <Image src={logo} alt="none" width={200} height={200} />
          </Col>
          <Col xs={12} lg={9} className="pt-2">
            <h2 className="text-center text-lg-start fw-bold">
              CLB Hỗ Trợ Lập Trình
            </h2>
            <h3 className="text-center text-lg-start">
              Khoa Công nghệ thông tin, Đại học Khoa học Huế
            </h3>
          </Col>
        </Row>
        <Row className="mt-5 pt-2">
          <Tabs defaultActiveKey="home" className="mb-3">
            <Tab eventKey="home" title="Giới thiệu">
              <Intro />
            </Tab>
            <Tab eventKey="contact" title="Liên hệ">
              <Contact />
            </Tab>
            <Tab eventKey="cd" title="Tổ chức, điều hành">
              <CoCau />
            </Tab>
            <Tab eventKey="members" title="Thành viên">
              <Members />
            </Tab>
            <Tab eventKey="profile" title="Chi tiết">
              <About />
            </Tab>
          </Tabs>
        </Row>
      </Container>
    </>
  );
}
