import React from "react";
import "../styling/aboutus-style.css";
import Card from "react-bootstrap/Card";
import RivaOutside from "../assets/images/8.jpg";
import RivaTable from "../assets/images/7.jpg";

const AboutUs = () => {
  return (
    <section id="aboutus">
      <h2 className="mb-5">About Us</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Card style={{ width: "34rem" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  marginTop: "15px",
                }}
              >
                <Card.Img
                  variant="top"
                  src={RivaOutside}
                  style={{ height: "auto", width: "70%" }}
                />
                <Card.Body
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </div>
            </Card>
          </div>
          <div className="col-md-6">
            <Card style={{ width: "34rem" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  marginTop: "15px",
                }}
              >
                <Card.Img
                  variant="top"
                  src={RivaTable}
                  style={{ height: "auto", width: "70%" }}
                />
                <Card.Body
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
