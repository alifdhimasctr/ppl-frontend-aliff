// components/HomePage.js
"use client";
import React, { useState } from "react";

const Navbar = () => {
  return (
    <div
      style={{
        backgroundColor: "#183D3D",
        padding: "25px",
        color: "white",
        textAlign: "center",
        position: "fixed",
        width: "100%",
        top: 0,
        left: 0,
        zIndex: 1000,
      }}
    ></div>
  );
};

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Implement login logic here
    console.log("Logging in with:", email, password);
  };

  return (
    <div>
      <Navbar />
      <div
        style={{
          backgroundColor: "#f5f5f5",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "50px",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            maxWidth: "400px",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <h2 style={{ color: "#183D3D", textAlign: "center" }}>
            Sistem Informasi Akademik
          </h2>
          <div className="mb-4">
            <label
              className="label"
              htmlFor="email"
              style={{ color: "#183D3D" }}
            >
              <span className="label-text">Email</span>
            </label>
            <div className="input-box">
              <input
                type="email"
                id="email"
                placeholder="Masukkan email"
                className="input input-bordered bg-white shadow-md w-full"
                style={{ color: "#183D3D" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="label"
              htmlFor="password"
              style={{ color: "#183D3D" }}
            >
              <span className="label-text">Password</span>
            </label>
            <div className="input-box">
              <input
                type="password"
                id="password"
                placeholder="Masukkan password"
                className="input input-bordered bg-white shadow-md w-full"
                style={{ color: "#183D3D" }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-4">
            <button
              className="btn btn-primary hover:bg-gray-300 text-white w-full h-10"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
