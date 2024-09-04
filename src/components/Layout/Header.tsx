"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import Nav from "react-bootstrap/Nav";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import Offcanvas from "react-bootstrap/Offcanvas";
import OffcanvasHeader from "react-bootstrap/OffcanvasHeader";
import OffcanvasTitle from "react-bootstrap/OffcanvasTitle";
import OffcanvasBody from "react-bootstrap/OffcanvasBody";
import logo from "../../../public/logo.png";
// import ThemeToggler from "../UI/ThemeToggler";

export default function Header() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isShow, setIsShow] = useState(false);
  const top: number = 1;
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > top) {
        setIsShow(true);
      } else {
        setIsShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Navbar
        expand="lg"
        className={`bg-theme  ${
          pathname === "/intro" ? "navbar-transparent sticky-top" : ""
        } ${isShow ? "navbar-show sticky-top" : ""}`}
        style={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)" }}
      >
        <Container fluid className="mx-3">
          <NavbarBrand href="/" style={{ width: 120 }}>
            <Image src={logo} alt="logo" width={40} height={40} />
          </NavbarBrand>
          <NavbarToggle className="text-light" onClick={handleShow} />
          <NavbarCollapse className="d-none d-lg-block">
            <Nav className="mx-auto nav-header">
              <Link
                className={`nav-link link-light nav-link-header mx-1 ${
                  pathname === "/" ? "active" : ""
                }`}
                href={"/"}
              >
                Trang chủ
              </Link>
              <Link
                className={`nav-link link-light nav-link-header mx-1 ${
                  pathname === "/intro" ? "active" : ""
                }`}
                href={"/intro"}
              >
                Giới thiệu
              </Link>
              <Link
                className={`nav-link link-light nav-link-header mx-1 ${
                  pathname === "/acti" ? "active" : ""
                }`}
                href={"/acti"}
              >
                Hoạt động
              </Link>
              <Link
                className={`nav-link link-light nav-link-header mx-1 ${
                  pathname === "/news" ? "active" : ""
                }`}
                href={"/news"}
              >
                Tin tức
              </Link>
              <Link
                className={`nav-link link-light nav-link-header mx-1 ${
                  pathname === "/join" ? "active" : ""
                }`}
                href={"/join"}
              >
                Tuyển thành viên
              </Link>
            </Nav>
          </NavbarCollapse>
          <div
            style={{ width: 120 }}
            className="d-none d-lg-flex justify-content-around"
          >
            <a
              href="https://www.facebook.com/clbhtlt.ithusc/photos"
              title="none"
              className="link-light linkhv"
            >
              <div className="mx-auto" style={{ width: 15 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  fill="currentColor"
                  className="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
              </div>
            </a>
            <a
              href="mailto:clbhtlt.ithusc@gmail.com"
              title="none"
              className="link-light linkhv"
            >
              <div className="mx-auto" style={{ width: 15 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  fill="currentColor"
                  className="bi bi-envelope-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                </svg>
              </div>
            </a>
            <a
              href="tel:+070 229 1317"
              title="none"
              className="link-light linkhv"
            >
              <div className="mx-auto" style={{ width: 15 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  fill="currentColor"
                  className="bi bi-telephone-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                  />
                </svg>
              </div>
            </a>
          </div>
        </Container>
      </Navbar>
      <Offcanvas show={show} placement="end" onHide={handleClose}>
        <OffcanvasHeader closeButton>
          <OffcanvasTitle>Tuỳ chọn</OffcanvasTitle>
        </OffcanvasHeader>
        <OffcanvasBody>
          <Link
            className={`nav-link link-dark mb-3 position-relative
            ${pathname === "/" ? "linkOffCanvasActive" : ""}`}
            onClick={handleClose}
            href={"/"}
          >
            Trang chủ
          </Link>
          <Link
            className={`nav-link link-dark mb-3 position-relative
            ${pathname === "/intro" ? "linkOffCanvasActive" : ""}`}
            onClick={handleClose}
            href={"/intro"}
          >
            Giới thiệu
          </Link>
          <Link
            className={`nav-link link-dark mb-3 position-relative
              ${pathname === "/acti" ? "linkOffCanvasActive" : ""}`}
            onClick={handleClose}
            href={"/acti"}
          >
            Hoạt động
          </Link>
          <Link
            className={`nav-link link-dark mb-3 position-relative
              ${pathname === "/news" ? "linkOffCanvasActive" : ""}`}
            onClick={handleClose}
            href={"/news"}
          >
            Tin tức
          </Link>
          <Link
            className={`nav-link link-dark mb-3 position-relative
              ${pathname === "/join" ? "linkOffCanvasActive" : ""}`}
            onClick={handleClose}
            href={"/join"}
          >
            Tuyển thành viên
          </Link>
          <div className="d-flex justify-content-evenly mt-5">
            <a
              href="https://www.facebook.com/clbhtlt.ithusc/photos"
              title="none"
              className="linkhv"
            >
              <div className="mx-auto" style={{ width: 15 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  fill="currentColor"
                  className="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
              </div>
            </a>
            <a
              href="mailto:clbhtlt.ithusc@gmail.com"
              title="none"
              className="linkhv"
            >
              <div className="mx-auto" style={{ width: 15 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  fill="currentColor"
                  className="bi bi-envelope-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                </svg>
              </div>
            </a>
            <a href="tel:+070 229 1317" title="none" className="linkhv">
              <div className="mx-auto" style={{ width: 15 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  fill="currentColor"
                  className="bi bi-telephone-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                  />
                </svg>
              </div>
            </a>
          </div>
        </OffcanvasBody>
        <div>
          <button
            className="btn btn-outline-dark mx-auto d-block mb-2"
            onClick={handleClose}
          >
            Đăng nhập với quyền admin
          </button>
        </div>
      </Offcanvas>
    </>
  );
}
