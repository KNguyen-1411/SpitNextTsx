import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
} from "react-bootstrap";
import style from "./intro.module.css";
import Image from "next/image";
interface CardProps {
  img: string;
  name: string;
  content: string;
  cd: string;
}
const CardCN = ({ img, name, content, cd = "" }: CardProps) => {
  const linkimg = `./img/intro/${img}`;
  return (
    <div style={{ width: 270 }} className="mx-auto mb-3">
      <Card className={`${style.cardhv} ${style.bgcard}`}>
        <Image
          src={linkimg}
          alt={name}
          width={100}
          height={100}
          style={{ objectFit: "cover" }}
          className="rounded-circle d-block mx-auto mt-4"
        />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <p>{cd}</p>
          <p style={{ fontSize: 13 }}>{content}</p>
        </CardBody>
      </Card>
    </div>
  );
};
export default function CoCau() {
  return (
    <Container fluid className="py-4">
      <Row>
        <Col xs={12}>
          <h4 className={`fw-bold ${style.hr}`}>Ban chủ nhiệm CLB:</h4>
        </Col>
        <Col xs={12} className="text-center my-3">
          <Row>
            <Col>
              <CardCN
                img="cn.png"
                name="Thầy Võ Văn Thành"
                content="Thầy Võ Văn Thành"
                cd="Chủ nhiệm CLB"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <CardCN
                img="lstoan.JPG"
                name="Lê Sỹ Toàn"
                content="Học sinh"
                cd="Phó chủ nhiệm CLB"
              />
            </Col>
            <Col>
              <CardCN
                img="nvhai.JPG"
                name="Ngô Văn Hải"
                content="Học sinh"
                cd="Phó chủ nhiệm CLB"
              />
            </Col>
            <Col>
              <CardCN
                img="hbk.JPG"
                name="Hooàng Bảo Khánh"
                content="Học sinh"
                cd="Phó chủ nhiệm CLB"
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <h4 className={`fw-bold ${style.hr}`}>Ban Cố vấn:</h4>
        </Col>
        <Col xs={12} className="text-center my-3">
          <Row>
            <Col>
              <CardCN
                img="cv2.png"
                name="TS. Nguyễn Hoàng Hà"
                content="Giảng viên, trưởng khoa Công nghệ thông tin"
                cd=""
              />
            </Col>
            <Col>
              <CardCN
                img="cv3.png"
                name="TS. Nguyễn Đăng Bình"
                content="Giảng viên, trưởng Bộ môn Khoa học máy tính."
                cd=""
              />
            </Col>
            <Col>
              <CardCN
                img="cv1.png"
                name="ThS. Lê Ng Thủy Nhi"
                content="Giảng viên, bí thư Liên chi Đoàn khoa Công nghệ thông tin."
                cd=""
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
