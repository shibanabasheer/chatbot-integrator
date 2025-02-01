import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { FaArrowLeft } from "react-icons/fa";
import "../../styles/setup-organization.css";

const SetupOrganization = () => {
  const [companyName, setCompanyName] = useState("");
  const [websiteURL, setWebsiteURL] = useState("");
  const [description, setDescription] = useState("");
  const [loadingMeta, setLoadingMeta] = useState(false);
  const [fetchError, setFetchError] = useState("");
  const navigate = useNavigate();

  // Fetch meta description from the website
  const fetchMetaDescription = async () => {
    if (!websiteURL.startsWith("http")) {
      setFetchError("Please enter a valid URL (include http:// or https://)");
      return;
    }

    setLoadingMeta(true);
    setFetchError("");
    try {
      const response = await fetch(`/api/fetch-meta?url=${encodeURIComponent(websiteURL)}`);
      const data = await response.json();
      if (data.description) {
        setDescription(data.description);
      } else {
        setDescription("No description found.");
      }
    } catch (error) {
      setFetchError("Failed to fetch meta description.");
    }
    setLoadingMeta(false);
  };


  const handleSubmitDetails = () => {
    if (companyName && websiteURL && description) {
      navigate("/scraped-pages"); 
    }
  };

  return (
    <div className="setup-page">
      <div className="topbar">
        <button onClick={() => navigate("/")} className="back-button">
          <FaArrowLeft /> Back
        </button>
      </div>

      <div className="setup-container">
        <h2>Setup Organization</h2>

        <div className="form-group">
          <label>Company Name</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Enter company name"
          />
        </div>

        <div className="form-group">
          <label>Company Website URL</label>
          <input
            type="text"
            value={websiteURL}
            onChange={(e) => setWebsiteURL(e.target.value)}
            placeholder="Enter website URL"
          />
          <button onClick={fetchMetaDescription} disabled={loadingMeta || !websiteURL} className="fetch-meta-btn">
            {loadingMeta ? <CircularProgress size={20} /> : "Fetch Meta Description"}
          </button>
          {fetchError && <p className="error-message">{fetchError}</p>}
        </div>

        <div className="form-group">
          <label>Company Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter company description"
          />
        </div>

        <div className="form-actions">
          <button
            onClick={handleSubmitDetails}
            disabled={!companyName || !websiteURL || !description}
          >
            Submit Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetupOrganization;
