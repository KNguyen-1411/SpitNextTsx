import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  FormGroup,
  FormLabel,
  FormControl,
  FormText,
  FormSelect,
} from "react-bootstrap";
import style from "./FormTVV.module.css";
export default function FormTTV() {
  return (
    <Form className="my-4">
      <Row>
        <Col xs={12} lg={6}>
          <FormGroup className="mb-3" controlId="formBasicEmail">
            <FormLabel>Họ và tên:</FormLabel>
            <FormControl name="q" type="text" placeholder="Nhập tên" />
            <FormText className="text-muted">
              Vui lòng điền đầy đủ và họ và tên của bạn
            </FormText>
          </FormGroup>
        </Col>
        <Col xs={12} lg={3}>
          <FormGroup className="mb-3" controlId="formBasicEmail">
            <FormLabel>Thông tin khoá của bạn:</FormLabel>
            <FormControl type="text" placeholder="Nhập lớp" />
            <FormText className="text-muted">
              Vd: K47B Kỹ Thuật Phần Mền
            </FormText>
          </FormGroup>
        </Col>
        <Col xs={12} lg={3}>
          <FormGroup className="mb-3" controlId="formBasicEmail">
            <FormLabel>Giới tính của bạn:</FormLabel>
            <FormSelect>
              <option>Giới tính</option>
              <option value="1">Nam</option>
              <option value="2">Nữ</option>
            </FormSelect>
          </FormGroup>
        </Col>
        <Col xs={12} lg={6}>
          <FormGroup className="mb-3" controlId="formBasicPassword">
            <FormLabel>Email:</FormLabel>
            <FormControl type="email" placeholder="Email" />
          </FormGroup>
        </Col>
        <Col xs={12} lg={6}>
          <FormGroup className="mb-3" controlId="formBasicPassword">
            <FormLabel>SDT liên lạc:</FormLabel>
            <FormControl type="text" placeholder="SDT" />
          </FormGroup>
        </Col>
        <Col xs={12} lg={6}>
          <FormGroup className="mb-3" controlId="formBasicEmail">
            <FormLabel>Nhập điểm hệ 10 môn Nhập môn lập trình:</FormLabel>
            <FormControl
              type="number"
              placeholder="Nhập điểm Nhập môn lập trình"
            />
            <FormText className="text-muted">
              Nếu bạn thuộc K46 và chưa có điểm thì vui lòng để trống
            </FormText>
          </FormGroup>
        </Col>
        <Col xs={12} lg={6}>
          <FormGroup className="mb-3" controlId="formBasicEmail">
            <FormLabel>Nhập điểm hệ 10 môn Kĩ thuật lập trình</FormLabel>
            <FormControl
              type="number"
              placeholder="Nhập điểm Kĩ thuật lập trình"
            />
            <FormText className="text-muted">
              Nếu bạn thuộc K46 và chưa có điểm thì vui lòng để trống
            </FormText>
          </FormGroup>
        </Col>
        <Col xs={12} lg={6}>
          <FormGroup className="mb-3" controlId="formBasicPassword">
            <FormLabel>Điểm mạnh:</FormLabel>
            <FormControl
              as="textarea"
              aria-label="With textarea"
              placeholder="Nhập điểm mạnh"
            />
          </FormGroup>
        </Col>
        <Col xs={12} lg={6}>
          <FormGroup className="mb-3" controlId="formBasicPassword">
            <FormLabel>Điểm yếu:</FormLabel>
            <FormControl
              as="textarea"
              aria-label="With textarea"
              placeholder="Nhập điểm yếu"
            />
          </FormGroup>
        </Col>
        <Col xs={12}>
          <FormGroup className="mb-3" controlId="formBasicEmail">
            <FormLabel>
              Bạn mong muốn điều gì khi vào clb hỗ trợ lập trình
            </FormLabel>
            <FormControl
              as="textarea"
              aria-label="With textarea"
              placeholder="Nhập mong muốn của bạn đối với clb"
            />
          </FormGroup>
        </Col>
        <Col xs={12}>
          <button
            className={`${style.btn85} btn-dark  mx-auto my-2`}
            style={{ display: "block", width: "100%" }}
          >
            Hoàn thành
          </button>
        </Col>
      </Row>
    </Form>
  );
}
