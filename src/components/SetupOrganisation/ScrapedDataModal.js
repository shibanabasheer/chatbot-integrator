import React from "react";
import { Fade } from "react-awesome-reveal";
import "../../styles/setup-organization.css";

const dummyScrapedData = {
  "https://example.com/home": ["Welcome to our homepage", "Explore our products"],
  "https://example.com/about": ["About Us", "Our Mission & Vision"],
};

const ScrapedDataModal = ({ page, onClose }) => {
  return (
    <div className="modal-overlay">
      <Fade duration={400} triggerOnce>
        <div className="modal">
          <div className="modal-header">
            <h3>Scraped Data for {page.url}</h3>
          </div>
          <ul>
            {dummyScrapedData[page.url] ? (
              dummyScrapedData[page.url].map((chunk, index) => (
                <li key={index}>{chunk}</li>
              ))
            ) : (
              <p className="no-data">No data found</p>
            )}
          </ul>
          <button onClick={onClose}>
            Close
          </button>
        </div>
      </Fade>
    </div>
  );
};

export default ScrapedDataModal;
