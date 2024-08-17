import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";

export default function HomePage() {
  return (
    <div>
      <Navigation />
      <div className="container">
        <ul> 
          <p1>
            "This <a href="/beer">beer</a> is almost as good as Zach's cock"
            8.5/10 - Adrian B{" "}
          </p1>
          <br></br>
          <img src="https://i.etsystatic.com/22590111/r/il/818d09/2222434772/il_fullxfull.2222434772_le2h.jpg"></img>
          <br></br>
        </ul>
      </div>
    </div>
  );
}
