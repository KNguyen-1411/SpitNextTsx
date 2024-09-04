import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import style from "./Home.module.css";
import { useAppData } from "@/context";
import NewsItem from "@/components/UI/News/NewItem";
import NewsBanner from "@/components/UI/News/NewsBanner";
import BannerSn from "../../../../public/img/sn1tuoi.png";

export default function Home3() {
  const { news, hotNews } = useAppData();
  return (
    <Container fluid className="py-4 home3 position-relative">
      <Container className="position-relative" style={{ zIndex: 1 }}>
        <Row className="text-center">
          <Col xs={12} className="h1 hh fw-bold mb-3">
            Tin tức
          </Col>
        </Row>
        <Row data-aos="fade-up">
          <Col xs={12} lg={7}>
            <h2 className="hh mb-3">Tin tức nổi bật</h2>
            <Row>
              <Col className={`mb-2 ${style.h5h6}`}>
                <Link href="/news/cuoc-thi-front-end" className="nav-link">
                  <div className={`${style.imghv}`}>
                    <Image
                      src={BannerSn}
                      alt="Sinh nhật 1 tuổi clb"
                      className="w-100 h-100 shadow"
                    />
                  </div>
                  <h5 className="textovf mt-1">
                    🎉 Sinh nhật 1 tuổi CLB Hỗ Trợ Lập Trình 🎂
                  </h5>
                </Link>
              </Col>
            </Row>
            <Row>
              {hotNews.slice(0, 3).map((item, index) => (
                <NewsBanner key={index} {...item} />
              ))}
            </Row>
          </Col>
          <Col xs={5} className="d-none d-lg-block">
            <h2 className="hh mb-3">Tin tức mới nhất</h2>
            {news.slice(0, 3).map((item, index) => (
              <NewsItem key={index} {...item} />
            ))}
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="text-center my-4">
            <Link href="/news">
              <button className={`${style.cbtn} ${style.cbtnGooey}`}>
                Xem thêm
                <div className={`${style.cbtnBlobs}`}>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                style={{ display: "block", height: 0, width: 0 }}
              >
                <defs>
                  <filter id="goo">
                    <feGaussianBlur
                      in="SourceGraphic"
                      stdDeviation="10"
                      result="blur"
                    />
                    <feColorMatrix
                      in="blur"
                      mode="matrix"
                      values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                      result="goo"
                    />
                    <feBlend in="SourceGraphic" in2="goo" />
                  </filter>
                </defs>
              </svg>
            </Link>
          </Col>
        </Row>
      </Container>
      <div className="custom-shape-divider-bottom-1725355750">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </Container>
  );
}
