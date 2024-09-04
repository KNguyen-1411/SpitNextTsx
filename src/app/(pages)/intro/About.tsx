"use client";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function About() {
  const [s1, setS1] = useState(false);
  const [s2, setS2] = useState(false);
  return (
    <>
      <Container fluid>
        <Row>
          <h2 className="fw-bold text-center my-3">CLB hỗ trợ lập trình</h2>
        </Row>
        <Row>
          <Col xs={12}>
            <h4>Tên gọi, trực thuộc và nguyên tắc hoạt động</h4>
            <ul>
              <li>
                Tên gọi: Câu lạc bộ (CLB) Hỗ trợ lập trình Trường Đại học Khoa
                học.
              </li>
              <li>
                Trực thuộc: Là tổ chức của sinh viên trường Đại học Khoa học có
                kết quả học tập các môn lập trình cao và yêu thích lập trình.
                CLB trực thuộc Hội sinh viên Trường
              </li>
              <li>
                Bảo trợ hoạt động: CLB được bảo trợ hoạt động bởi Đảng ủy, Ban
                Giám hiệu, Công Đoàn, Đoàn Thanh niên – Hội sinh viên Trường.
              </li>
              <li>Phối hợp hoạt động: LCĐ khoa Công nghệ thông tin</li>
              <li>
                Nguyên tắc hoạt động: theo nguyên tắc dân chủ và trên tinh thần
                tự nguyện, tự giác của các thành viên. Hoạt động của CLB tuân
                thủ chủ trương, đường lối của Đảng, chính sách và pháp luật Nhà
                nước, các quy định của Nhà trường và các đơn vị bảo trợ hoạt
                động
              </li>
            </ul>
          </Col>
          <Col xs={12}>
            <h4>Mục đích hoạt động</h4>
            <ul>
              <li>
                CLB Hỗ trợ lập trình ra đời với mục đích tạo sân chơi học thuật,
                nghiên cứu, đam mê lập trình và có kinh nghiệm lập trình cho các
                bạn sinh viên trường Đai học Khoa học đặc biệt là sinh viên khoa
                Công nghệ thông tin.
              </li>
              <li>
                Hỗ trợ hoạt động học tập của các bạn sinh viên, phát huy khả
                năng, góp phần nâng cao chất lượng học tập, tạo môi trường trao
                đổi, học tập, rèn luyện các kỹ năng ứng dụng trong ngành. CLB Hỗ
                trợ lập trình được ra đời trên cơ sở hỗ trợ các giảng viên trong
                các buổi học thực hành, giúp đỡ các bạn sinh viên trong việc
                tiếp cận và học tập các môn lập trình tại các buổi thực hành tại
                phòng máy.
              </li>
              <li>
                Trong tương lai, sẽ hướng đến việc hợp tác chặt chẽ với các
                doanh nghiệp là cầu nối giữa doanh nghiệp với khoa và với sinh
                viên
              </li>
            </ul>
          </Col>
          <Col xs={12}>
            <h4>Nội dung hoạt động</h4>
            <ul>
              <li>
                Đào tạo, tập huấn, hướng dẫn, trao đổi kiến thức lập trình giữa
                các bạn thành viên với các giảng viên bộ môn, giảng viên cố vấn
                CLB theo định kì
              </li>
              <li>
                Hỗ trợ các buổi học thực hành tại phòng máy với các môn lập
                trình cơ bản như Nhập môn lập trình, Kỹ thuật lập trình, Lập
                trình nâng cao, … và không ngừng nâng cao trình độ, kiến thức
                cho thành viên CLB để có thể hỗ trợ thêm nhiều môn học khác
              </li>
              <li>
                Tổ chức các buổi trainning thường kỳ, các bài test dành cho các
                bạn thành viên. viên
              </li>
              <li>
                Tham gia hỗ trợ, đăng cai tổ chức các cuộc thi, các buổi seminar
                của Khoa liên quan đến các lĩnh vực chuyên ngành, bên cạnh đó
                tạo nên các thương hiệu nổi bật riêng của CLB
              </li>
              <li>
                Tổ chức các cuộc thi học thuật cho thành viên các CLB, tiến hành
                cho các bạn thành viên làm các dự án của riêng mình như thiết kế
                website, game, ứng dụng android, ios, … qua đó có thể giới thiệu
                việc làm và kết nối đến các doanh nghiệp.
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="text-center">
          <Col xs={12}>
            <h5>Xem chi tiết văn bản</h5>
          </Col>
          <Col xs={12}>
            <button
              className="btn mb-3 border"
              onClick={() => {
                setS1(!s1);
              }}
            >
              Đề án thành lập clb hỗ trợ lập trình
            </button>
            {s1 && (
              <iframe
                width="100%"
                height="600"
                allowFullScreen
                title="pdf"
                src="./videos/deanspit.pdf"
              />
            )}
          </Col>
          <Col xs={12}>
            <button
              className="btn mb-3 border"
              onClick={() => {
                setS2(!s2);
              }}
            >
              Thành lập CLB hỗ trợ lập trình
            </button>
            {s2 && (
              <iframe
                width="100%"
                height="600"
                allowFullScreen
                title="pdf"
                src="./videos/tl.pdf"
              />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
