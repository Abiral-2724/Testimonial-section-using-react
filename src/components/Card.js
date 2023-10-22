import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Card(props) {
  let review = props.reviews;
  return (
    <div className="card-wrapper">
      <div className="card-image">
        <img src={review.image} className="image" />
        <div className="image-div"></div>
      </div>
      <div className="card-paragraph">
        <p className="paragraph-name">{review.name}</p>
      </div>
      <div className="card-job">
        <p className="job-paragraph">{review.job}</p>
      </div>
      <div className="left">
        <FaQuoteLeft />
      </div>
      <div className="card-text">{review.text}</div>
      <div className="right">
        <FaQuoteRight />
      </div>
    </div>
  );
}

export default Card;
