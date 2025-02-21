import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTenders } from "../api";

const TenderDetails = () => {
  const { id } = useParams();
  const [tender, setTender] = useState(null);

  useEffect(() => {
    const loadTender = async () => {
      const tenders = await fetchTenders();
      const selectedTender = tenders.find((t) => t._id === id);
      setTender(selectedTender);
    };
    loadTender();
  }, [id]);

  if (!tender) return <p>Loading...</p>;

  return (
    <div className="container">
      <h1>{tender.title}</h1>
      <p>
        <strong>Tender ID:</strong> {tender.tenderId}
      </p>
      <p>
        <strong>Published Date:</strong>{" "}
        {new Date(tender.ePublishedDate).toLocaleDateString()}
      </p>
      <p>
        <strong>Closing Date:</strong>{" "}
        {new Date(tender.closingDate).toLocaleDateString()}
      </p>
      <p>
        <strong>Opening Date:</strong>{" "}
        {new Date(tender.openingDate).toLocaleDateString()}
      </p>
      <p>
        <strong>Organization:</strong> {tender.organization}
      </p>
      <p>
        <strong>Corrigendum:</strong> {tender.corrigendum}
      </p>
      <p>
        <strong>Summary:</strong> {tender.summary}
      </p>
      <a
        href={tender.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="external-link"
      >
        View Tender
      </a>
    </div>
  );
};

export default TenderDetails;
