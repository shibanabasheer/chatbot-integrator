import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCopy, FaCheck } from "react-icons/fa";
import "./../../styles/integration-instructions.css";

const IntegrationInstructions = () => {
  const navigate = useNavigate();
  return (
    <div className="integration-container">
      <div className="topbar">
        <button onClick={() => navigate("/chatbot-integration")} className="back-button">
          <FaArrowLeft /> Back
        </button>
      </div>
      <h2>Integrate Chatbot</h2>
      <div className="button-container">
        <button
          onClick={() => navigate("/instructions/easy")}
          className="instruction-button"
        >
          Easy Instructions
        </button>
        <button
          onClick={() => navigate("/instructions/mail")}
          className="instruction-button"
        >
          Mail Instructions
        </button>
      </div>
    </div>
  );
};

const InstructionsPage = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const easyInstructions = `
  <!-- Add this code within the <head> of your website -->
  <script src="https://your-chatbot-script.com/chatbot.js"></script>
  `;

  const handleCopy = () => {
    navigator.clipboard.writeText(easyInstructions.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="instructions-container">
      <div className="topbar">
        <button onClick={() => navigate("/integration-instructions")} className="back-button">
          <FaArrowLeft /> Back
        </button>
      </div>

      <div className="instructions-box">
        <h2>{type === "easy" ? "Easy Integration Instructions" : "Mail Instructions"}</h2>
        <p>
          {type === "easy"
            ? "Copy and paste the following code inside the <head> of your website:"
            : "Send the following instructions to your developer:"}
        </p>

        {type === "mail" && (
          <>
            <p>Email: <strong>developer@example.com</strong></p>
            <p>Subject: <strong>Chatbot Integration Instructions</strong></p>
          </>
        )}

        <pre className="code-box">{easyInstructions}</pre>

        <button onClick={handleCopy} className="copy-button">
          {copied ? <FaCheck /> : <FaCopy />} {copied ? "Copied!" : "Copy Code"}
        </button>
      </div>
    </div>
  );
};

export { IntegrationInstructions, InstructionsPage };
