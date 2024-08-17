import React from 'react';
import '../styles/navigation.scss';

export default function Navigation() {
  return (
    <nav>
      <div className="nav-container">
        <a href="/home" style={{ textDecoration: 'none !important', color: 'white' }}>
          <h1 className="logo">Beer Out Of Ten</h1>
        </a>
        <div className="nav-menu">
          <h2 className="username">Hello, Ye Kan West</h2>
          <div className="dropdown">
            <button className="dropbtn">Menu ☰</button>
            <div className="dropdown-content">
              <a href="/home">Home</a>
              <a href='/profile'>Profile</a>
              <a href='/'>Logout</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}