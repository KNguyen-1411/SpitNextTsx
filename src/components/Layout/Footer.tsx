import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Link from "next/link";
import FacebookPagePlugin from "../Plugin/FacebookPagePlugin";
import ThemeToggler from "../UI/ThemeToggler";
import styles from "./Footer.module.css";
import Image from "next/image";
export default function Footer() {
  return (
    <>
      <Container
        fluid
        className={`bg-theme  ${styles.footer} pt-4`}
        style={{ boxShadow: "0 -4px 10px rgba(0, 0, 0, 0.3)" }}
      >
        <div>
          <div className="h6 ">Trang chủ</div>
          <hr />
          <div>
            <FacebookPagePlugin />
          </div>
        </div>
        <div>
          <div className="h6">CLB hỗ trợ lập trình</div>
          <hr />
          <div className="d-flex  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-geo-alt-fill me-2 mt-1"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
            </svg>
            <p>77 Nguyễn Huệ, Huế</p>
          </div>
          <div className="d-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-telephone-fill me-2 mt-1"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
              />
            </svg>
            <p>070 229 1317</p>
          </div>
          <div className="d-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-envelope-at-fill me-2 mt-1"
              viewBox="0 0 16 16"
            >
              <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
              <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
            </svg>
            <p>clbhtlt.ithusc@gmail.com</p>
          </div>
          <div className="d-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-facebook me-2"
              style={{ marginTop: 3 }}
              viewBox="0 0 16 16"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
            </svg>{" "}
            <p>facebook.com/clhtlt.ithusc</p>
          </div>
        </div>
        <div>
          <div className="h6 mb-2">Truy cập nhanh</div>
          <hr />
          <div>
            <Link className="nav-link linkhv" href={"/"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-caret-right-fill me-1"
                viewBox="0 0 16 16"
              >
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
              Trang chủ
            </Link>
          </div>
          <div className="mt-1">
            <Link className="nav-link linkhv" href={"/intro"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-caret-right-fill me-1"
                viewBox="0 0 16 16"
              >
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
              Giới thiệu
            </Link>
          </div>
          <div className="mt-1">
            <Link className="nav-link linkhv" href={"/acti"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-caret-right-fill me-1"
                viewBox="0 0 16 16"
              >
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
              Hoạt động
            </Link>
          </div>
          <div className="mt-1">
            <Link className="nav-link linkhv" href={"/news"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-caret-right-fill me-1"
                viewBox="0 0 16 16"
              >
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
              Tin tức
            </Link>
          </div>
          <div className="mt-1">
            <Link className="nav-link linkhv" href={"/join"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-caret-right-fill me-1"
                viewBox="0 0 16 16"
              >
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
              Tuyển thành viên
            </Link>
          </div>
        </div>
        <div>
          <div className="h6 mb-2">Liên kết</div>
          <hr />
          <div>
            <Link
              className="nav-link linkhv"
              href={"http://husc.hueuni.edu.vn/index.php"}
            >
              <Image
                src="./husc_logo.png"
                className="me-1"
                width={30}
                height={35}
                alt="logo"
              />
              Trường Đại học Khoa học
            </Link>
          </div>
          <div className="mt-3">
            <Link className="nav-link linkhv" href={"https://it.husc.edu.vn/"}>
              <Image
                src="./logo_it.png"
                className="me-1"
                width={35}
                height={35}
                alt="logo"
              />
              Khoa công nghệ thông tin
            </Link>
          </div>
        </div>
        <div className={`${styles.toggletheme}`}>
          <div className="h6 mb-2">Tuỳ chỉnh</div>
          <hr />
          <div className="px-2">
            <ThemeToggler idBtn="checkbox" />
          </div>
        </div>
        <Row className="d-flex justify-content-between"></Row>
      </Container>
      <Container fluid className="bg-theme text-center pt-2">
        <Row>
          <Col>
            <hr style={{ border: "none", height: 4, background: "white" }} />
            <p className="text-white">
              © 2024 CLB Hỗ trợ lập trình - Đại học Khoa học Huế
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
