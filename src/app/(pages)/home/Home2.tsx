import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import style from "./Home.module.css";
import acti1 from "../../../../public/img/home/banner1.png";
import acti2 from "../../../../public/img/home/tuhoc.jpg";
import acti3 from "../../../../public/img/home/trainning.jpg";
export default function Home2() {
  return (
    <>
      <Container fluid className="pt-3 pb-4 overflow-hidden position-relative">
        <Container className="mb-4 position-relative" style={{ zIndex: 1 }}>
          <Row
            className="text-center mt-5"
            data-aos="fade-in"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1400"
          >
            <Col xs={12} className="h1 hh fw-bold mb-4">
              Hoạt động
            </Col>
            <Col xs={12} className="mb-5 fs-6 ">
              CLB Hỗ trợ lập trình ra đời với mục đích tạo sân chơi học thuật,
              nghiên cứu, đam mê lập trình và có kinh nghiệm lập trình cho các
              bạn sinh viên trường Đai học Khoa học đặc biệt là sinh viên khoa
              Công nghệ thông tin.
            </Col>
          </Row>
          <Row className="mb-4">
            <Col xs={12} md={4} className="mb-3" data-aos="fade-right">
              <div className={`${style.imgovl} position-relative `}>
                <Image src={acti1} alt="spit" className="w-100 h-auto shadow" />
                <Link href="/acti" className="nav-link link-light">
                  Xem thêm
                </Link>
              </div>
              <h5 className="text-center my-2 ">Serminar</h5>
            </Col>
            <Col xs={12} md={4} className="mb-3" data-aos="fade-up">
              <div className={`${style.imgovl} position-relative `}>
                <Image src={acti2} alt="spit" className="w-100 h-auto shadow" />
                <Link href="/acti" className="nav-link link-light">
                  Xem thêm
                </Link>
              </div>
              <h5 className="text-center my-2 ">Mở cửa phòng tự học</h5>
            </Col>
            <Col xs={12} md={4} className="mb-3" data-aos="fade-left">
              <div className={`${style.imgovl} position-relative `}>
                <Image src={acti3} alt="spit" className="w-100 h-auto shadow" />
                <Link href="/acti" className="nav-link link-light">
                  Xem thêm
                </Link>
              </div>
              <h5 className="text-center my-2 ">Trainning K47</h5>
            </Col>
          </Row>
          <Row data-aos="fade-in" data-aos-anchor-placement="center-bottom">
            <button
              className={`${style.btn85} btn-dark  mx-auto my-2`}
              style={{ display: "block", width: 300 }}
            >
              Xem trang hoạt động
            </button>
          </Row>
        </Container>
      </Container>
    </>
  );
}
