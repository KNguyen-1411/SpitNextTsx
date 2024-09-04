import Col from "react-bootstrap/Col";
import Image from "next/image";
import Link from "next/link";
import style from "./News.module.css";

interface NewsBanner {
  title: string;
  imgSrc: string;
  linkto: string;
  hh: string;
}

const NewsBanner = ({ title, imgSrc, linkto }: NewsBanner) => {
  const src: string = `./img/news/${imgSrc}`;

  return (
    <Col className={`${style.h5h6} mb-2`} lg={4}>
      <Link href={linkto} className="nav-link">
        <div className={`${style.imghv} overflow-hidden h-100`}>
          <Image
            src={src}
            width={200}
            height={100}
            alt="none"
            className={`w-100 ${style.ImgBanner} shadow`}
          />
        </div>
        <h6 className="textovf mt-1">{title}</h6>
      </Link>
    </Col>
  );
};

export default NewsBanner;
