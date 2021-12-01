import React from "react";
import "./About.css";
import { Col, Container, Row} from "react-bootstrap";
import user from "../../images/user.png";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";

const About = () => {
  return (
    <div className="about_bg">
      <NavigationBar style={{ zIndex: "2" }} />
      <Container  className="about_container ">
        <div className="d-flex py-2 ps-5">
          <h1 className="text-white fw-5 fs-1">About</h1>
          <hr className="w-100 about_hr" />
        </div>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <div data-aos="flip-up" className="about_left px-5">
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
            </div>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <div className="about_right">
              <img data-aos="flip-up" src={user} alt="user " />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
