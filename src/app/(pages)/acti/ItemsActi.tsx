import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import style from "../home/Home.module.css";
interface ItemsActiProps {
  title: string;
  content: string;
  img: string;
  index: number;
}

export default function ItemsActi({
  title,
  content,
  img,
  index,
}: ItemsActiProps) {
  img = `./img/acti/${img}`;
  if (index % 2 === 0) {
    return (
      <Row className="d-flex flex-column-reverse flex-md-row bghd1">
        <Col
          xs={12}
          md={6}
          className={`px-0 py-3 d-flex align-items-center justify-content-center ${style.aniLeft}`}
        >
          <div className="w-75 text-center">
            <h3 className="mb-3">{title}</h3>
            <p>{content}</p>
          </div>
        </Col>
        <Col xs={12} md={6} className={`px-0 ${style.aniRight}`}>
          <Image
            src={img}
            alt="Picture of the author"
            width={400}
            height={200}
            className="w-100 h-100"
          />
        </Col>
      </Row>
    );
  } else {
    return (
      <Row className="d-flex bghd2">
        <Col xs={12} md={6} className={`px-0 ${style.aniLeft}`}>
          <Image
            src={img}
            alt="Picture of the author"
            width={2}
            height={1}
            className="w-100 h-100"
          />
        </Col>
        <Col
          xs={12}
          md={6}
          className={`px-0 py-3 d-flex align-items-center justify-content-center ${style.aniRight}`}
        >
          <div className="w-75 text-center">
            <h3 className="mb-3 ">{title}</h3>
            <p>{content}</p>
          </div>
        </Col>
      </Row>
    );
  }
}
