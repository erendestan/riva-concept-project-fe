import React from "react";
import "../styling/carrousel-style.css";
import Carousel from "react-bootstrap/Carousel";
import CarrouselImage1 from "../assets/images/1.jpg";
import CarrouselImage2 from "../assets/images/4.jpg";
import CarrouselImage3 from "../assets/images/3.jpg";

const customCarouselStyle = {
  width: "950px",
  height: "600px",
};

const Carrousel = () => {
  return (
    <>
      <section id="photogallery">
        <h2 className="mb-5">Photo Gallery</h2>

        <div className="centeringContainerStyle">
          <Carousel style={customCarouselStyle} fade interval={2000}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={CarrouselImage3}
                alt="First Slide"
              ></img>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={CarrouselImage1}
                alt="Second Slide"
              ></img>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={CarrouselImage2}
                alt="Third Slide"
              ></img>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Carrousel;
