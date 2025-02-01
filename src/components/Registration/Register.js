import { useState } from "react";
import { auth, googleProvider, signInWithPopup, createUserWithEmailAndPassword, sendEmailVerification } from "./firebase";
import { useNavigate } from "react-router-dom";
import "./../../styles/form.css";

const Register = () => {
  const [userData, setUserData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
      const user = userCredential.user;
      await sendEmailVerification(user);
      alert("Verification email sent. Please check your inbox.");
      navigate("/verify-email");
    } catch (err) {
      setLoading(false);
      setError(
        err.code === "auth/invalid-email" ? "Invalid email address." :
        err.code === "auth/weak-password" ? "Password should be at least 6 characters." :
        "Registration failed. Please try again."
      );
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/setup-organization");
    } catch (err) {
      setError("Google Sign-In failed. Please try again.");
    }
  };

  return (
    <div className="register-page">
      <div className="top-bar">
        <button onClick={() => navigate("")} className="signin-button">
            Sign In
        </button>
        </div>
      <div className="form-container">
        <h2>Register</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleRegister}>
          <input type="text" name="name" placeholder="Full Name" value={userData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={userData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={userData.password} onChange={handleChange} required />
          <button type="submit" disabled={loading}>{loading ? "Registering..." : "Register"}</button>
        </form>
        <p>OR</p>
        <button className="google-btn" onClick={handleGoogleSignIn}>
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
