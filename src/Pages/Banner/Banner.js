import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Banner.css";
import Typical from "react-typical";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";
import facebook from "../../images/facebook.png"

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
                <h5 className="text-warning">Wellcome To my World </h5>
                <h2 className="banner_heading_title ">
                  Hello I'M <span className="name">FAYSAL</span>
                </h2>
                <h1 className="banner_heading text-white text-align-left">
                  I am a &nbsp;
                  
                </h1>
                <div className="d-flex justify-content-center align-items-center">
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
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
