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
              style={{ textAlign: "center", marginTop: "150px" }}
            >
              <div>
                <p style={{ color: "orangered" }}>Wellcome To my World </p>
                <h2 className="banner_heading_title my-4">
                  <span className="heading_IAM">Hello I'M</span>{" "}
                  <span className="name">FAYSAL</span>
                </h2>
                <h1 className="banner_heading text-white">
                  I am a&nbsp;
                  <span className="typical-text">
                    <Typical
                      loop={Infinity}
                      wrapper="b"
                      steps={[
                        "Frontend Developer",
                        2000,
                        "Programmer...",
                        2000,
                      ]}
                    />
                  </span>
                </h1>
              </div>
              <hr className="text-white w-25 mx-auto" />
            </div>
            <div style={{ textAlign: "center" }}>
              <a
                href="https://drive.google.com/file/d/1MJJDYkY03c2t4l0AbLOv9X2mQ0MbMtzk/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button data-aos="fade-right" className="resume_btn">
                  Resume
                </button>
              </a>
              <a href="##" >
                <button data-aos="fade-left" className="resume_btn">
                  Hire Me
                </button>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <div data-aos="fade-right" className="social_link">
        <ul>
          <li>
            <a
              href="https://github.com/Faysal-Ahmed-Ruddro"
              target="_blank"
              rel="noopener noreferrer "
            >
              <i className="fab fa-github "></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100009124013953"
              target="_blank"
              rel="noopener noreferrer "
            >
              <i className="fab fa-facebook "></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100009124013953"
              target="_blank"
              rel="noopener noreferrer "
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100009124013953"
              target="_blank"
              rel="noopener noreferrer "
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
