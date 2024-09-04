import Link from "next/link";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import style from "./News.module.css";
import { AosInit } from "@/utils/AosInit";
interface NewsCard {
  title: string;
  content: string;
  imgSrc: string;
  linkto: string;
}

const NewsCard = ({ title, content, imgSrc, linkto }: NewsCard) => {
  const src = `./img/news/${imgSrc}`;
  AosInit();
  return (
    <>
      <Col
        xs={12}
        md={6}
        lg={4}
        className={`${style.h5h6} mb-4`}
        data-aos="zoom-in"
        data-aos-duration="800"
      >
        <Link href={linkto} className="d-block nav-link ">
          <div className={`${style.imghv}`}>
            <Image
              src={src}
              width={400}
              height={200}
              alt="none"
              className="w-100 custom-img rounded-3 shadow-sm mb-3"
            />
          </div>
          <h6 className="textovf2">{title}</h6>
        </Link>
      </Col>
    </>
  );
};
export default NewsCard;
