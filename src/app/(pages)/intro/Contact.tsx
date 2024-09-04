import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <Container fluid>
        <Row>
          <h2 className="fw-bold text-center my-3 hh">Liên hệ</h2>
        </Row>
        <Row>
          <Col lg={8} xs={12} className="mb-3">
            <Col xs={12} className="h3 hh mb-2">
              CLB hỗ trợ lập trình
            </Col>
            <Col xs={12}>
              <p>
                Clb Hỗ trợ lập trình là: Là tổ chức của sinh viên trường Đại học
                Khoa học có kết quả học tập các môn lập trình cao và yêu thích
                lập trình. CLB trực thuộc Hội sinh viên Trường.
              </p>
              <p>
                Được bảo trợ: bởi Đảng ủy, Ban Giám hiệu, Công Đoàn, Đoàn Thanh
                niên – Hội sinh viên Trường.
              </p>
              <p>Phối hợp hoạt động: Khoa Công nghệ Thông tin </p>
            </Col>
            <Col xs={12} className="h3 hh mb-2">
              Liên hệ với CLB
            </Col>
            <Col xs={12}>
              <p>
                <span className="me-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-pin-map"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"
                    />
                  </svg>
                </span>{" "}
                Địa chỉ: 77 Nguyễn Huệ, Huế
              </p>
              <p>
                <span className="me-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-telephone"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                  </svg>
                </span>
                Di động: 070 229 1317
              </p>
              <p>
                <span className="me-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-envelope"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                  </svg>
                </span>
                Email: clbhtlt.ithusc@gmail.com
              </p>
              <p>
                <span className="me-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                  </svg>
                </span>
                Facebook: facebook.com/clhtlt.ithusc
              </p>
            </Col>
            <Col xs={12} className="h3 hh mb-2">
              Trực thuộc
            </Col>
            <Col xs={12}>
              <Link
                className="nav-link mb-2"
                href={"http://husc.hueuni.edu.vn/index.php"}
              >
                Trang chủ Trường Đại học Khoa học Huế
              </Link>
              <Link className="nav-link" href={"https://it.husc.edu.vn/"}>
                Khoa công nghệ thông tin
              </Link>
            </Col>
          </Col>
          <Col lg={4} xs={12} className="mb-3">
            <Col xs={12} className="h3 hh mb-2">
              Liên hệ với chúng tôi
            </Col>
            <Form>
              <FormGroup className="mb-3" controlId="exampleForm.ControlInput1">
                <FormLabel>Địa chỉ email</FormLabel>
                <FormControl type="email" placeholder="name@example.com" />
              </FormGroup>
              <FormGroup
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <FormLabel>Tin nhắn</FormLabel>
                <FormControl as="textarea" placeholder="Tin nhắn..." rows={3} />
              </FormGroup>
              <button className="btn btn-primary w-100" type="submit">
                Gửi
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
