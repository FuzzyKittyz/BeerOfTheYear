import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";

export default function Brewery() {
  return (
    <div>
      <Navigation />
      <div className="container">
        <Navigation />
        <a href="/home">Beer Out Of Ten</a>
        <h1>New Level Brewing</h1>
        <ul>
          <h2>
            <img src="https://pbs.twimg.com/profile_images/1611128722782048256/OFLgDLdA_400x400.jpg"></img>
          </h2>
          <p>"If you like metal music and alright beer, it's good."</p>
          <br></br>
          <p>insert penis here</p>
          <a href="/beer">Licence to dill</a>
        </ul>
      </div>
    </div>
  );
}
