"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./CardOnClick.css";
import style from "./Card.module.css";
import { Col, Row } from "react-bootstrap";

interface CardT {
  name: string;
  gender: number;
  sdt: number;
  gmail: string;
  class: string;
  role: Array<{ name: string }>;
  achievement: Array<{ name: string }>;
  img: string;
}

export default function Card({
  name,
  gender,
  sdt,
  gmail,
  class: className,
  role,
  achievement,
  img,
}: CardT) {
  img = `./img/avt/${img}`;
  const [show, setShow] = useState(false);
  const showCard = () => {
    setShow(true);
    setTimeout(() => {
      document.querySelector(".md-modal")?.classList.add("md-show");
      document.querySelector(".md-overlay")?.classList.add("md-show");
    }, 100);
  };

  const hideCard = () => {
    document.querySelector(".md-modal")?.classList.remove("md-show");
    document.querySelector(".md-overlay")?.classList.remove("md-show");
    setTimeout(() => {
      setShow(false);
    }, 300);
  };

  useEffect(() => {
    const handleEscKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        hideCard();
      }
    };

    document.addEventListener("keydown", handleEscKeydown);
    return () => {
      document.removeEventListener("keydown", handleEscKeydown);
    };
  }, []);

  return (
    <>
      <div className={`col-lg-3 col-4 ${style.card}`}>
        <div
          className={` ${style.cardabs} ${
            gender === 1 ? "" : style.cardabsGirl
          }`}
          onClick={showCard}
        >
          <Image
            src={img}
            alt="none"
            className={`${gender === 1 ? style.gen1 : style.gen0}`}
            width={100}
            height={100}
          />
          <h5 className="mt-2">{name}</h5>
          <div>
            {role.map((item, index) => (
              <h6 key={index}> {item.name}</h6>
            ))}
          </div>
        </div>
      </div>
      {show && (
        <>
          <div className="md-modal md-effect-1">
            <div
              className={` ${gender === 1 ? "" : "md-content-girl"}
              md-content p-3 text-center`}
            >
              <Row>
                <Col xs={12} md={4}>
                  <Row>
                    <Col xs={12}>
                      <Image
                        src={img}
                        className="rounded-circle"
                        alt="none"
                        width={100}
                        height={100}
                      />
                    </Col>
                    <Col className="pt-3" xs={12}>
                      <h5>Vai trò</h5>
                      {role.map((item, index) => (
                        <p key={index}> {item.name}</p>
                      ))}
                    </Col>
                  </Row>
                </Col>
                <Col xs={12} md={8} className="text-md-start text-center">
                  <h5>Thông tin</h5>
                  <p>Họ & Tên: {name}</p>
                  <p>Lớp: {className}</p>
                  <p>Sdt: 0{sdt}</p>
                  <p>Email: {gmail}</p>
                </Col>
                {achievement.length > 0 && (
                  <>
                    <hr />
                    <Col xs={12}>
                      <h5>Thành tích</h5>
                      {achievement.map((item, index) => (
                        <p key={index}> {item.name}</p>
                      ))}
                    </Col>
                  </>
                )}
              </Row>

              <Row>
                <Col>
                  <button
                    className="md-close btn btn-primary"
                    onClick={hideCard}
                  >
                    Đóng
                  </button>
                </Col>
              </Row>
              {/* <Image
                src={img}
                className="rounded-circle"
                alt="none"
                width={100}
                height={100}
              />
              <h4>{name}</h4>
              {role.map((item, index) => (
                <h5 key={index}> {item.name}</h5>
              ))}
              <p>{className}</p>
              <p>0{sdt}</p>
              <p>{gmail}</p>
              {achievement.map((item, index) => (
                <p key={index}> {item.name}</p>
              ))}
              <button className="md-close btn btn-primary" onClick={hideCard}>
                Đóng
              </button> */}
            </div>
          </div>
          <div className="md-overlay" onClick={hideCard}></div>
        </>
      )}
    </>
  );
}
