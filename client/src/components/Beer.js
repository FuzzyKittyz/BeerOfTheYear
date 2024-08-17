import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";

export default function Beer() {
  return (
    <div>
      <Navigation />
      <div className="container">
        <a href="/home">Beer Out Of Ten</a>
        <h1>Licence to dill</h1>
        <h4>
          <a href="/brewery">New Level Brewing</a>
        </h4>
        <ul>
          <h2>
            <img src="https://pbs.twimg.com/media/EwIUmvIXcAMs6Tr?format=jpg&name=medium"></img>
          </h2>
          <p>
            When you were young and your heart Was an open book You used to say
            live and let live (You know you did) (You know you did) (You know
            you did) But if this ever changin' world In which we live in Makes
            you give in and cry Say live and let die Live and let die What does
            it matter to ya When you got a job to do you got to do it well You
            got to give the other fella hell You used to say live and let live
            (You know you did) (You know you did) (You know you did) But if this
            ever changin' world In which we live in Makes you give in and cry
            Say live and let die Live and let die
          </p>
        </ul>
      </div>
    </div>
  );
}
