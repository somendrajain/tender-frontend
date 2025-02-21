import React from "react";
import { Link } from "react-router-dom";

const TenderCard = ({ tender }) => {
  return (
    <div className="tender-card">
      <h2>{tender.title}</h2>
      <p>
        <strong>Closing Date:</strong> {tender.closingDate}
      </p>
      <Link to={`/tender/${tender._id}`} className="view-details">
        View Details
      </Link>
    </div>
  );
};

export default TenderCard;
