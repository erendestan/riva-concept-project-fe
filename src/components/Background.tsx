import React from "react";
// import RivaEnterance from "../assets/images/background.jpg";
import "../styling/background-style.css";

const Background = () => {
  return (
    <>
      <section id="home">
        <div id="intro" className="bg-image background-image">
          <div className="mask">
            <div className="container d-flex justify-content-center align-items-center h-100">
              <div className="row">
                <div className="col-12 text-center">
                  <h1 className="mb-0 fw-bold text-black display-1">Eren</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Background;
