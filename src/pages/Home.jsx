import React, { useEffect, useState } from "react";
import { fetchTenders } from "../api";
import { Link } from "react-router-dom";
import TenderCard from "../components/TenderCard";

const Home = () => {
  const [tenders, setTenders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterId, setFilterId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSearch = async () => {
    const filters = {
      search: searchTerm || undefined,
      id: filterId || undefined,
      startDate: startDate || undefined,
      endDate: endDate || undefined,
    };

    const data = await fetchTenders(filters);
    setTenders(data);
  };

  useEffect(() => {
    const loadTenders = async () => {
      const filters = {
        search: searchTerm || undefined,
        id: filterId || undefined,
        startDate: startDate || undefined,
        endDate: endDate || undefined,
      };
      const data = await fetchTenders(filters);
      setTenders(data);
    };

    loadTenders();

    return () => {
      console.log("Unmounting component...");
    };
  }, [searchTerm, filterId, startDate, endDate]); // ✅ Dependencies added

  return (
    <div className="container">
      <h1>Active Tenders</h1>

      <div className="filter-container">
        <input
          type="text"
          placeholder="Search by keyword..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by Tender ID..."
          value={filterId}
          onChange={(e) => setFilterId(e.target.value)}
        />
        <input
          type="date"
          placeholder="Start Date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="date"
          placeholder="End Date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="tender-list">
        {tenders.length > 0 ? (
          tenders.map((tender) => (
            <TenderCard key={tender._id} tender={tender} />
          ))
        ) : (
          <p>No tenders match your search.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
