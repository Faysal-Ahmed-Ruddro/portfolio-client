import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Banner.css";
import Typical from "react-typical";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";

const Banner = () => {
  return (
    <div className="banner_bg">
      <NavigationBar />
      <Container>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <div
              data-aos="fade-up"
              style={{ textAlign: "center", marginTop: "200px" }}
            >
              <div>
                <p style={{ color: "orangered" }}>Wellcome To my World </p>
                <h2 className="banner_heading_title ">
                  <span>Hello I'M</span> <span className="name">FAYSAL</span>
                </h2>
                <h1 className="banner_heading text-white text-align-left">
                  I am a&nbsp;
                  <Typical
                    loop={Infinity}
                    wrapper="b"
                    steps={["Frontend Developer", 2000, "Programmer...", 2000]}
                  />
                </h1>
              </div>
            </div>
            <hr className="text-white w-25 mx-auto" />
            <div
              data-aos="fade-up"
              className="d-flex justify-content-center align-items-center"
            >
              <a
                href="https://github.com/Faysal-Ahmed-Ruddro"
                target="_blank"
                rel="noopener noreferrer "
              >
                <i className="fab fa-github "></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100009124013953"
                target="_blank"
                rel="noopener noreferrer "
              >
                <i className="fab fa-facebook "></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100009124013953"
                target="_blank"
                rel="noopener noreferrer "
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100009124013953"
                target="_blank"
                rel="noopener noreferrer "
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
