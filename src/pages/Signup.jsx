import React, { useState } from "react";
import "./Login.css"; // reuse same styling

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Signup failed");
      }

      alert(data.message || "Signup successful");
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Signup request failed:", error);
      alert(error.message);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSignup}>
        <h2>Signup</h2>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Create Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;