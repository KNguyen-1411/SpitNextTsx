import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import style from "./intro.module.css";
import Image, { StaticImageData } from "next/image";
import tt1 from "../../../../public/img/intro/tt1.png";
import tt2 from "../../../../public/img/intro/tt2.png";
import tt3 from "../../../../public/img/intro/tt3.png";
interface TTich {
  img: StaticImageData;
  title: string;
  // content: string;
}
const thanhtichs: TTich[] = [
  {
    img: tt1,
    title: "Giải nhất cuộc thi lập trình",
  },
  {
    img: tt2,
    title: "Giải nhì cuộc thi lập trình",
  },
  {
    img: tt3,
    title: "Giải ba cuộc thi lập trình",
  },
];
const Thanhtich = ({ img, title }: TTich) => {
  return (
    <Col xs={12} md={4} className={`${style.cardhv}`}>
      <Image
        src={img}
        alt="thanh tich"
        className={`rounded-3 mb-2 shadow-sm ${style.imgtt}  `}
      />
      <h5 className="textovf mt-1">{title}</h5>
    </Col>
  );
};

export default function Intro() {
  return (
    <>
      <Container fluid className="px-0 text-center pt-3">
        <Row className="mb-5">
          <h2 className="hh  fw-bold mb-4 mt-2">Giới thiệu</h2>
          <Col xs={12}>
            <p className=" mx-auto">
              (Support Programming Information Technology, viết tắt SPIT) Trường
              Đại học Khoa học Huế, được thành lập vào ngày dưới sự chỉ đạo của
              Hội Sinh viên trường và ban cố vấn thuộc Khoa Công nghệ thông tin
              Trường Đại học Khoa học, Đại học Huế.
            </p>
          </Col>
          <Col xs={12}>
            <p className="  mx-auto">
              CLB Hỗ trợ lập trình ra đời với mục đích tạo sân chơi học thuật,
              nghiên cứu, đam mê lập trình và có kinh nghiệm lập trình cho các
              bạn sinh viên trường Đai học Khoa học đặc biệt là sinh viên khoa
              Công nghệ thông tin.
            </p>
          </Col>
        </Row>
        <Row className="mb-5">
          <h2 className="hh fw-bold mb-4">Video giới thiệu</h2>
          <video
            src="./videos/spit.mp4"
            className={`${style.video} rounded-3 `}
            controls
          ></video>
        </Row>
        <Row>
          <Col xs={12}>
            <h2 className="hh  fw-bold">Thành tích nổi bật</h2>
          </Col>
          <Col xs={12} className="mb-2">
            Qua từng năm, các thành viên đã cùng nhau mang về nhiều giải thưởng
            danh giá cho CLB SPIT.
            <hr />
          </Col>
          <Col>
            <Row>
              {thanhtichs.map((tt, index) => (
                <Thanhtich key={index} {...tt} />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
