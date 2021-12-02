import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Menu.css";
const Menu = ({ menuItem }) => {
  return (
    <Container>
      <Row style={{ margin: "0 auto" }}>
        {menuItem.map((item) => {
          return (
            <Col
              data-aos="zoom-in"
              className="mx-auto"
              xs={12}
              md={4}
              lg={3}
              key={item.id}
            >
              <div className="item-sub-container">
                <div className="p-3">
                  <img width="200px" height="200px" src={item.image} alt="Images" />
                  <h3 className="text-white text-center">{item.name}</h3>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Menu;
