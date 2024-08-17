import React, { useState, useEffect } from "react";

export default function LoginPage() {
  return (
    <div className="container">
      <h1>Login Bitch</h1>
      <ul>
        <h2>Log in</h2>
        <input type="text" placeholder="Enter Email" className="login-input" />
        <input
          type="password"
          placeholder="Enter Password"
          className="login-input"
        />
        <button className="login-button">
          <a href="/home">Login</a>
        </button>
      </ul>
    </div>
  );
}
