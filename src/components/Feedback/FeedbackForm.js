import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./../../styles/feedback.css"; 

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Feedback submitted: " + feedback);
    setFeedback("");
  };

  return (
    <div className="feedback-page">
      <div className="topbar">
        <button onClick={() => navigate("/test-chatbot")} className="back-button">
          <FaArrowLeft /> Back
        </button>
      </div>
      <div className="feedback-form-container">
        <h2>Share Feedback</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows="6"
            placeholder="Let us know what went wrong..."
            required
          />
          <button type="submit" className="submit-feedback-button">
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
