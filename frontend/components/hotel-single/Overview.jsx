import { useState } from "react";

const Overview = ({detail}) => {
  const [showMore, setShowMore] = useState(false)

  return (
    <>
      <h3 className="text-22 fw-500 pt-40 border-top-light">Overview</h3>
      <p className={`text-dark-1 text-15 mt-20`}>
        {showMore ? detail : detail.slice(0,300)}
      </p>
      <a
        href="#"
        className="d-block text-14 text-blue-1 fw-500 underline mt-10"
        onClick={(e) => {e.preventDefault(); setShowMore(!showMore)}}
      >
        {showMore ? 'Show Less' : 'Show More'}
      </a>
    </>
  );
};

export default Overview;
