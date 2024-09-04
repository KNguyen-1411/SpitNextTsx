import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Link from "next/link";
export default function NotFound() {
  return (
    <>
      <Container className="text-center">
        <div
          id="notfound"
          className="position-relative d-flex align-items-center justify-content-center"
          style={{ height: "60vh" }}
        >
          <div className="notfound">
            <div className="notfound-404">
              <h3>Oops! Trang không tồn tại</h3>
              <h1>
                <span>4</span>
                <span>0</span>
                <span>4</span>
              </h1>
            </div>
            <h2>Rất xin lỗi, nhưng trang của bạn tìm không tồn tại</h2>
          </div>
        </div>
        <Link href="/">
          <Button className="mb-5" variant="outline-dark  hh">
            Trở về trang chủ
          </Button>
        </Link>
      </Container>
    </>
  );
}
