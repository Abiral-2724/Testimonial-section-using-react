import "./styles.css";
import reviews from "./data";
import React from "react";
import Testimonial from "./components/Testimonial";
const App = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <h1 className="heading">Our Testimonials</h1>
        <div className="heading-underline"></div>
        <Testimonial reviews={reviews} />
      </div>
    </div>
  );
};
export default App;
