import { Col, Container, Row } from "react-bootstrap";
import "./Skills.css";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";
import skillData from "./SkillsData";
import { useState } from "react";
import Menu from "./MenuFilter/Menu";
import Button from "./MenuFilter/Button";

const allCategories = [
  "ALL",...new Set(skillData.map((item) => item.category))
];

const Skills = () => {
  const [menuItem, setMenuItem] = useState(skillData);
  const [buttons, setButtons] = useState(allCategories);

  const filter = (button) => {
    if (button === "ALL") {
      setMenuItem(skillData);
      return;
    }
    const filteredData = skillData.filter((item) => item.category === button);
    setMenuItem(filteredData);
  };
  return (
    <div className="skills-bg">
      <NavigationBar />
      <Container className="skills_container ">
        <div>
          <div className="d-flex py-4">
            <h1 className="text-white fw-5 fs-1">Skills</h1>
            <hr className="w-100 about_hr" />
          </div>
          <Button buttons={buttons} filter={filter} />
          <Row>
            <Col xs={12} md={12} lg={12} className="mx-auto">
              <Menu menuItem={menuItem} />
            </Col>
          </Row>
        </div>
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

export default Skills;
