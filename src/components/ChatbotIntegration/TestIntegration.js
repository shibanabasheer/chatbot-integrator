import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import { FaArrowLeft } from "react-icons/fa";
import "./../../styles/test-integration.css";

const TestIntegration = () => {
  const [integrationSuccess, setIntegrationSuccess] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      const isIntegrated = Math.random() > 0.5; 
      setIntegrationSuccess(isIntegrated);
    }, 2000);
  }, []);

  const shareOnSocial = (platform) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("Check out this amazing chatbot!");
    const shareLinks = {
      twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    };
    window.open(shareLinks[platform], "_blank");
  };

  const goBack = () => {
    navigate("/chatbot-integration"); 
  };

  return (
    <div className="test-container">
      <div className="topbar">
        <button onClick={goBack} className="back-button">
          <FaArrowLeft /> Back
        </button>
      </div>
      {integrationSuccess === null ? (
        <h2>Testing Integration...</h2>
      ) : integrationSuccess ? (
        <div className="success-box">
          <Confetti />
          <h2>🎉 Integration Successful!</h2>
          <p>Your chatbot is now live on your website.</p>
          <button className="btn" onClick={() => navigate("/admin")}>
            Explore Admin Panel
          </button>
          <button className="btn" onClick={() => navigate("/chatbot")}>
            Start Talking to Your Chatbot
          </button>
          <div className="social-buttons">
            <p>Share your chatbot:</p>
            <button className="social-btn twitter" onClick={() => shareOnSocial("twitter")}>
              Share on Twitter
            </button>
            <button className="social-btn linkedin" onClick={() => shareOnSocial("linkedin")}>
              Share on LinkedIn
            </button>
            <button className="social-btn facebook" onClick={() => shareOnSocial("facebook")}>
              Share on Facebook
            </button>
          </div>
        </div>
      ) : (
        <div className="failure-box">
          <h2>❌ Integration Not Detected</h2>
          <p>We couldn't verify your chatbot integration. Please check the setup and try again.</p>
          <button className="btn retry-btn" onClick={() => window.location.reload()}>
            Retry Integration Test
          </button>
        </div>
      )}
    </div>
  );
};

export default TestIntegration;
