import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import Link from "next/link";
import style from "./News.module.css";
interface NewsItems {
  title: string;
  content: string;
  imgSrc: string;
  linkto: string;
}

const NewsItem = ({ title, content, imgSrc, linkto }: NewsItems) => {
  const src: string = `./img/news/${imgSrc}`;
  return (
    <Row className={`${style.h5h6} mb-2 ps-2`}>
      <Link href={linkto} className="nav-link">
        <Row className="mb-2">
          <Col xs={4}>
            <Image
              src={src}
              width={400}
              height={200}
              alt={title}
              className="w-100 h-100 shadow rounded-3"
            />
          </Col>
          <Col xs={8}>
            <h6 className={`textovf`}>{title}</h6>
            <p className={`textovf2`}>{content}</p>
          </Col>
        </Row>
      </Link>
      <hr className="mt-3" />
    </Row>
  );
};

export default NewsItem;
