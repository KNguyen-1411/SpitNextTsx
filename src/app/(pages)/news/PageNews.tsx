"use client";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useAppData } from "@/context";
import NewsCard from "@/components/UI/News/NewsCard";
import style from "../home/Home.module.css";
import Pagination from "react-bootstrap/Pagination";

export default function PageNews() {
  const { news } = useAppData();
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
      setCurrentPage(1);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  const filteredNews = news.filter((item) => {
    if (debouncedSearch === "") {
      return true;
    } else if (
      item.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    ) {
      return true;
    }
    return false;
  });

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const currentItems = filteredNews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const renderPaginationItems = () => {
    const items = [];
    if (currentPage > 1) {
      items.push(
        <Pagination.First key="first" onClick={() => handlePageChange(1)} />
      );
    }
    for (let number = 1; number <= totalPages; number++) {
      if (
        number === 1 ||
        number === totalPages ||
        (number >= currentPage - 1 && number <= currentPage + 1)
      ) {
        items.push(
          <Pagination.Item
            key={number}
            active={number === currentPage}
            onClick={() => handlePageChange(number)}
          >
            {number}
          </Pagination.Item>
        );
      } else if (items[items.length - 1]?.props.children !== "...") {
        if (number === currentPage - 2 || number === currentPage + 2) {
          items.push(<Pagination.Ellipsis key={`ellipsis-${number}`} />);
        }
      }
    }
    if (currentPage < totalPages) {
      items.push(
        <Pagination.Last
          key="last"
          onClick={() => handlePageChange(totalPages)}
        />
      );
    }

    return items;
  };

  return (
    <Container fluid className="p-0 pageNews ">
      <Container className="py-4 ">
        <Row className={`mb-3 ${style.aniUpText}`}>
          <h1 className="text-center hh fw-bold">Tin tức</h1>
          <hr />
          <p className="text-center w-75 mx-auto">
            Các thông báo của câu lạc bộ hỗ trợ lập trình
          </p>
        </Row>
        <Row className="bg-main-news pt-4 px-2 rounded-4 blur-filter">
          <Col xs={12}>
            <div className="col-12 col-md-6 mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </Col>
          <Col xs={12} className="mt-5">
            <Row>
              {currentItems.map((item, index) => (
                <NewsCard
                  key={index}
                  title={item.title}
                  content={item.content}
                  imgSrc={item.imgSrc}
                  linkto={item.linkto}
                />
              ))}
            </Row>
          </Col>
          <Col xs={12} className="mt-4 d-flex justify-content-center">
            <Pagination>{renderPaginationItems()}</Pagination>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
