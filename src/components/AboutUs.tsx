import React from "react";
import "../styling/aboutus-style.css";
import Card from "react-bootstrap/Card";
import RivaOutside from "../assets/images/8.jpg";
import RivaTable from "../assets/images/7.jpg";

const containerStyle = {
  overflowY: "auto",
  marginTop: "100px",
  marginBottom: "20px",
};

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
                  <Card.Title>Elegant Hall</Card.Title>
                  <Card.Text>
                    Discover the allure of our indoor venue, featuring an
                    elegant hall for your celebration. Let us craft the perfect
                    setting for your special day, blending charm and
                    sophistication seamlessly.
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
                  <Card.Title>Chic and Intimate Setting</Card.Title>
                  <Card.Text>
                    Embrace the elegance and charm of our indoor venue with a
                    chic and intimate setting. The bride's desk creates a unique
                    atmosphere for your special celebration.
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
