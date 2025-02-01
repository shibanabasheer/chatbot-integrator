import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import "./../../styles/form.css";

const VerifyEmail = () => {
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const checkVerification = setInterval(() => {
      auth.currentUser?.reload().then(() => {
        if (auth.currentUser?.emailVerified) {
          setVerified(true);
          clearInterval(checkVerification);
          setTimeout(() => navigate("/setup-organization"), 1500);
        }
      }).catch(() => setError("Error checking email verification."));
    }, 3000);

    return () => clearInterval(checkVerification);
  }, [navigate]);

  const resendVerificationEmail = async () => {
    setLoading(true);
    setError("");
    try {
      await auth.currentUser?.sendEmailVerification();
      alert("Verification email resent. Please check your inbox.");
    } catch (err) {
      alert("Failed to resend verification email. Try again later.");
    }
    setLoading(false);
  };

  return (
    <div className="varification-page">
      <div className="topbar">
        <button onClick={() => navigate("/")} className="back-button">
          ⬅ Back
        </button>
      </div>
      <div className="form-container">
        <h2>Email Verification</h2>
        {verified ? (
          <p className="success">✅ Email Verified! Redirecting...</p>
        ) : (
          <p>Check your inbox for the verification email.</p>
        )}

        {error && <p className="error-message">{error}</p>}

        {!verified && (
          <button
            className="resend-btn"
            onClick={resendVerificationEmail}
            disabled={loading}
          >
            {loading ? "Resending..." : "Resend"}
          </button>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;
