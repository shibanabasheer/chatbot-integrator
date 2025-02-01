import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./../../styles/test-chatbot.css";

const TestChatbot = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/chatbot-integration");
  };

  return (
    <div className="test-chatbot-container">
      <div className="topbar">
        <button onClick={goBack} className="back-button">
          <FaArrowLeft /> Back
        </button>
        <p >
          Chatbot not working as intended?{" "}
          <Link to="/feedback" className="feedback-link">Share feedback</Link>
        </p>
      </div>

      <iframe
        src="https://example.com" 
        title="Client Website"
        className="client-website"
      ></iframe>

      <div className="dummy-chatbot">
        <p>💬 Chatbot</p>
      </div>
    </div>
  );
};

export default TestChatbot;
