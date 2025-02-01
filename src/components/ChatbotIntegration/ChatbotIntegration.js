import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./../../styles/chatbot-integration.css"; 

const ChatbotIntegration = () => {
  const navigate = useNavigate();

  const handleTestChatbotClick = () => {
    navigate("/test-chatbot");
  };

  const handleIntegrateClick = () => {
    navigate("/integration-instructions");
  };

  const handleTestIntegrationClick = () => {
    navigate("/test-integration");
  };

  const goBack = () => {
    navigate("/setup-organization"); 
  };

  return (
    <div className="chatbot-integration-container">
      <div className="topbar">
        <button onClick={goBack} className="back-button">
          <FaArrowLeft /> Back
        </button>
        <h1>Chatbot Integration</h1>
      </div>
      
      <div className="button-container">
        <button
          onClick={handleTestChatbotClick}
          className="chatbot-button"
        >
          Test Chatbot
        </button>
        <button
          onClick={handleIntegrateClick}
          className="chatbot-button"
        >
          Integrate on Your Website
        </button>
        <button
          onClick={handleTestIntegrationClick}
          className="chatbot-button"
        >
          Test Integration
        </button>
      </div>
    </div>
  );
};

export default ChatbotIntegration;



// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import "./../../styles/chatbot-integration.css"; 

// const ChatbotIntegration = () => {
//   const [isTesting, setIsTesting] = useState(false);
//   const [showInstructions, setShowInstructions] = useState(false);
//   const [email, setEmail] = useState("");
//   const [emailSent, setEmailSent] = useState(false);
//   const navigate = useNavigate();

//   const handleTestChatbotClick = () => {
//     setIsTesting(true); 
//   };

//   const handleShowInstructions = () => {
//     setShowInstructions(true);
//   };

//   const handleSendEmail = () => {
//     // Simulate sending an email (replace this with API call)
//     if (email.trim()) {
//       setEmailSent(true);
//       setTimeout(() => setEmailSent(false), 3000); // Reset emailSent after 3 seconds
//     }
//   };

//   const handleFeedback = () => {
//     navigate("/feedback"); // Navigate to feedback page
//   };

//   return (
//     <div className="chatbot-integration-container">
//         {/* Topbar with feedback link */}
//         <div className="topbar">
//             <p>
//               Chatbot not working as intended?{" "}
//               <Link to="/feedback" className="feedback-link">Share feedback</Link>
//             </p>
//           </div>
//       {isTesting ? (
//         <div className="testing-view">
          

//           {/* Client's website iframe with dummy chatbot */}
//           <iframe
//             src="https://example.com" // Replace with the actual URL of the client's website
//             title="Client Website"
//             className="client-website"
//             style={{ width: "100%", height: "80vh" }} // Ensure it takes up enough space
//           ></iframe>

//           {/* Dummy chatbot in the bottom-right corner */}
//           <div className="dummy-chatbot">
//             <p>💬 Chatbot</p>
//           </div>
//         </div>
//       ) : (
//         <div className="test-button-container">
//           <button
//             onClick={handleTestChatbotClick}
//             className="test-chatbot-button"
//           >
//             Test Chatbot
//           </button>
//           <button onClick={() => navigate("/integration-instructions")} className="test-chatbot-button">
//             Integrate on Your Website
//           </button>
//           <button className="test-chatbot-button" onClick={() => navigate("/test-integration")}>
//             Test Integration
//           </button>
//         </div>
//       )}
      
//       {/* Modal for Integration Instructions */}
//       {showInstructions && (
//         <div className="modal">
//           <div className="modal-content">
//             <h3>Integrate Chatbot on Your Website</h3>

//             <p>Copy and paste the following code inside the {"<head>"} section of your website:</p>
//             <pre className="code-snippet">
//               {`<script src="https://your-chatbot.com/integration.js"></script>`}
//             </pre>

//             <p>Or, send instructions to your developer:</p>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter developer's email"
//               className="email-input"
//             />
//             <button onClick={handleSendEmail} className="send-email-button">
//               {emailSent ? "✅ Sent!" : "Send Email"}
//             </button>

//             <button onClick={() => setShowInstructions(false)} className="close-button">
//               Close
//             </button>
//           </div>
//         </div>
//       )}
      
//     </div>
//   );
// };

// export default ChatbotIntegration;
