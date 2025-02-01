import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Register from "./components/Registration/Register";
import VerifyEmail from "./components/Registration/VerifyEmail";
import SetupOrganization from "./components/SetupOrganisation/SetupOrganization";
import ScrapedPages from "./components/SetupOrganisation/ScrapedPages";
import ChatbotIntegration from "./components/ChatbotIntegration/ChatbotIntegration";
import TestChatbot from "./components/ChatbotIntegration/TestChatbot";
import { IntegrationInstructions, InstructionsPage } from "./components/ChatbotIntegration/IntegrationInstructions";
import TestIntegration from "./components/ChatbotIntegration/TestIntegration";
import FeedbackForm from "./components/Feedback/FeedbackForm"; 
import { auth } from "./components/Registration/firebase";
import "./App.css"



function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user); 
    });

    return () => unsubscribe();
  }, []);

  if (user === null) {
    return <div>Loading...</div>; 
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        {user && <Route path="/setup-organization" element={<SetupOrganization />} />}
        {!user && <Route path="*" element={<Navigate to="/" />} />}
        <Route path="/scraped-pages" element={<ScrapedPages />} />
        <Route path="/chatbot-integration" element={<ChatbotIntegration />} />
        <Route path="/test-chatbot" element={<TestChatbot />} />
        <Route path="/integration-instructions" element={<IntegrationInstructions />} />
        <Route path="/instructions/:type" element={<InstructionsPage />} />
        <Route path="/test-integration" element={<TestIntegration />} />
        <Route path="/feedback" element={<FeedbackForm />} />
      </Routes>
    </Router>
  );
}

export default App;

