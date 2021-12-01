import React, { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Banner.css";
import Typical from "react-typical";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";
import {
  tsParticles,
  MoveDirection,
  DestroyMode,
  DestroyType,
  OutMode,
  ShapeType,
  StartValueType,
} from "tsparticles";


const Banner = () => {
  const BannerRef = useRef()
  useEffect(()=>{
    tsParticles.load(BannerRef, {
      detectRetina: true,
      background: {
        color: "#000",
      },
      fpsLimit: 60,
      emitters: {
        direction: MoveDirection.top,
        life: {
          count: 0,
          duration: 0.1,
          delay: 0.1,
        },
        rate: {
          delay: 0.5,
          quantity: 1,
        },
        size: {
          width: 100,
          height: 0,
        },
        position: {
          y: 100,
          x: 50,
        },
      },
      particles: {
        number: {
          value: 0,
        },
        destroy: {
          mode: DestroyMode.split,
          split: {
            count: 1,
            factor: {
              value: 0.333333,
            },
            rate: {
              value: 100,
            },
            particles: {
              stroke: {
                width: 0,
              },
              color: {
                value: ["#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93"],
              },
              number: {
                value: 0,
              },
              collisions: {
                enable: false,
              },
              opacity: {
                value: {
                  min: 0.1,
                  max: 1,
                },
                animation: {
                  enable: true,
                  speed: 0.7,
                  sync: false,
                  startValue: StartValueType.max,
                  destroy: DestroyType.min,
                },
              },
              shape: {
                type: ShapeType.circle,
              },
              size: {
                value: 2,
                animation: {
                  enable: false,
                },
              },
              life: {
                count: 1,
                duration: {
                  value: {
                    min: 1,
                    max: 2,
                  },
                },
              },
              move: {
                enable: true,
                gravity: {
                  enable: false,
                },
                speed: 2,
                direction: "none",
                random: true,
                straight: false,
                outMode: OutMode.destroy,
              },
            },
          },
        },
        life: {
          count: 1,
        },
        shape: {
          type: "line",
        },
        size: {
          value: {
            min: 0.1,
            max: 50,
          },
          animation: {
            enable: true,
            sync: true,
            speed: 90,
            startValue: StartValueType.max,
            destroy: DestroyType.min,
          },
        },
        stroke: {
          color: {
            value: "#ffffff",
          },
          width: 1,
        },
        rotate: {
          path: true,
        },
        move: {
          enable: true,
          gravity: {
            acceleration: 15,
            enable: true,
            inverse: true,
            maxSpeed: 100,
          },
          speed: {
            min: 10,
            max: 20,
          },
          outModes: {
            default: OutMode.destroy,
            top: OutMode.none,
          },
          trail: {
            fillColor: "#000",
            enable: true,
            length: 10,
          },
        },
      },
    });
  },[])
  return (
    <div ref={BannerRef} className="banner_bg">
      <NavigationBar/>
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
