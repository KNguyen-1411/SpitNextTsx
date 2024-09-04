import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ItemsActi from "./ItemsActi";
import activities from "@/data/Local/Acti.json";
import style from "../home/Home.module.css";
import img from "../../../../public/img/sn1tuoi.png";
import Image from "next/image";
export default function Acti() {
  return (
    <Container fluid className="px-0 ">
      <div className={`${style.imghome}  position-relative`}>
        <Image src={img} alt="Picture of the author" layout="responsive" />
        <h3 className="position-absolute text-light" style={{ zIndex: 2 }}>
          Activity
        </h3>
      </div>
      <Container className="pt-4 pb-5 overflow-hidden">
        <Row className={`mb-4 ${style.aniUpText}`}>
          <Col className="text-center">
            <h1 className="hh my-3 fw-bold">Hoạt Động Của CLB</h1>
            <p>
              CLB thường xuyên có các hoạt động lớn nhỏ, được tổ chức giúp gắn
              kết các thành viên trong CLB cũng như mở rộng các mối quan hệ bên
              ngoài CLB. Các sự kiện tổ chức ra cũng là để mọi người giải trí
              sau những giờ học trên trường cũng như ở CLB.
            </p>
          </Col>
        </Row>
        {activities.map((activity, index) => (
          <ItemsActi
            key={index}
            title={activity.title}
            content={activity.content}
            img={activity.img}
            index={index}
          />
        ))}
      </Container>
    </Container>
  );
}
