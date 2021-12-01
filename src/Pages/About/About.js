import React from "react";
import "./About.css";
import { Col, Container, Row } from "react-bootstrap";
import user from "../../images/user.png";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";

const About = () => {
  return (
    <div className="about_bg">
      <NavigationBar />
      <Container className="about_container ">
        <div className="d-flex py-2 ps-5">
          <h1 className="text-white fw-5 fs-1">About</h1>
          <hr className="w-100 about_hr" />
        </div>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <div data-aos="zoom-in-up" className="about_left px-5">
              <h4>
                Faysal
                <span
                  style={{
                    color: "orangered",
                    fontSize: "25px",
                    borderBottom: "2px solid orangered",
                  }}
                >
                  Ahmed
                </span>{" "}
              </h4>
              <h5>Junior FrontEnd Developer</h5>
              <p>
                <i>
                  This is Faysal, I have Completed my Diploma in Engineering.I
                  alawys wanted to be a developer and I had more explore it by
                  create many websites as my personal projects and I am also an
                  expert in WordPress Theme Customization. But Now I want to
                  apply my passion on proffessionally. So, that I’m looking
                  forward to bringing that passion to a full-time role in a
                  company.
                </i>
              </p>
              <hr className="w-75 text-white" />
              <div>
                <h4
                  style={{
                    color: "orangered",
                    fontSize: "25px",
                    borderBottom: "2px solid orangered",
                    display: "inline",
                  }}
                >
                  Education:
                </h4>
                <ul>
                  <li className="text-white fs-5">
                    Diploma In Engineering (Computer)
                    <p className="fs-6">SEPT-2015 to SEPT-2019</p>
                  </li>
                  <li className="text-white fs-6">
                    Secondary School Certificate (S.S.C)
                    <p className="fs-6">FEB-2015</p>
                  </li>
                </ul>
              </div>
              <div>
                <h4
                  style={{
                    color: "orangered",
                    fontSize: "25px",
                    borderBottom: "2px solid orangered",
                    display: "inline",
                  }}
                >
                  Additional:
                </h4>
                <ul>
                  <li className="text-white fs-5">
                    Complete Web Development with Programming Hero
                    <p className="fs-6">JULY-2021 to PRESENT</p>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <div className="about_right">
              <img
                width="100%"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                src={user}
                alt="user "
              />
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

export default About;
