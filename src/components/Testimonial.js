import { useState } from "react";
import Card from "./Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Testimonial(props) {
  let reviews = props.reviews;
  const [index, setindex] = useState(0);

  function leftshifthandler() {
    if (index - 1 < 0) {
      setindex(reviews.length - 1);
    } else {
      setindex(index - 1);
    }
  }
  function rightshifthandler() {
    if (index + 1 > reviews.length - 1) {
      setindex(0);
    } else {
      setindex(index + 1);
    }
  }
  function suprisehandler() {
    // for generating the random integer
    // we can use the Math.random() function of java script
    // for converting the value between o to n we multiple it with reviews.length
    let randomindex = Math.floor(Math.random() * reviews.length);
    setindex(randomindex);
  }

  return (
    <div className="testimorial-wrapper">
      <Card reviews={reviews[index]}> </Card>
      <div>
        <button className="card-button-1" onClick={leftshifthandler}>
          <FiChevronLeft />
        </button>
        <button className="card-button-1" onClick={rightshifthandler}>
          <FiChevronRight />
        </button>
      </div>
      <div>
        <button className="card-button-suprise" onClick={suprisehandler}>
          Suprise me
        </button>
      </div>
    </div>
  );
}
export default Testimonial;
