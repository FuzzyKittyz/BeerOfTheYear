import React, { useState, useEffect } from "react";

export default function HomePage() {
  return (
    <div className="container">
      <a href='/profile'>Profile</a>
      <h1>Beer of the year</h1>
      <ul>
        <p1>"This <a href="/beer">beer</a> is almost as good as Zach's cock" 8.5/10 - Adrian B </p1>
        <br></br>
        <img src='https://i.etsystatic.com/22590111/r/il/818d09/2222434772/il_fullxfull.2222434772_le2h.jpg'></img>
        <br></br>
      </ul> 
    </div>
  );
}