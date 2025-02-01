import React, { useState } from "react";
import ScrapedDataModal from "./ScrapedDataModal";
import "../../styles/setup-organization.css";

const dummyPages = [
  { id: 1, url: "https://example.com/home", status: "Scraped" },
  { id: 2, url: "https://example.com/about", status: "Scraped" },
  { id: 3, url: "https://example.com/contact", status: "Pending" },
  { id: 4, url: "https://example.com/blog", status: "Detected" },
];

const ScrapedPagesTable = () => {
  const [selectedPage, setSelectedPage] = useState(null);

  return (
    <div className="scraped-pages-container">
      <table className="scraped-pages-table">
        <thead>
          <tr>
            <th>Page URL</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dummyPages.map((page) => (
            <tr key={page.id} className={page.status.toLowerCase()}>
              <td>{page.url}</td>
              <td>{page.status}</td>
              <td>
                {page.status === "Scraped" && (
                  <button className="view-button" onClick={() => setSelectedPage(page)}>
                    View Data
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedPage && (
        <ScrapedDataModal page={selectedPage} onClose={() => setSelectedPage(null)} />
      )}
    </div>
  );
};

export default ScrapedPagesTable;
