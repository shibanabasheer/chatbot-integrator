import React from "react";
import ScrapedPagesTable from "./ScrapedPagesTable";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "../../styles/setup-organization.css";

const ScrapedPages = () => {
  const navigate = useNavigate();

  return (
    <div className="scraped-pages-container">
      <div className="topbar">
        <button onClick={() => navigate(-1)} className="back-button">
          <FaArrowLeft /> Back
        </button>
      </div>

      <h2 className="page-title">Scraped Webpages</h2>
      <ScrapedPagesTable />

      <div className="form-actions">
        <button className="next-button" onClick={() => navigate("/chatbot-integration")}>
          Proceed to Chatbot Integration
        </button>
      </div>
    </div>
  );
};

export default ScrapedPages;
