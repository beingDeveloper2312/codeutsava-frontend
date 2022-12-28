import React from "react";

import "./Section6.css";

import sponsers from "../../assets/data/sponsersData.js";

const Section6 = () => {
  return (
    <div className="codeutsava__section5" id="sponsers">
      <div className="codeutsava__section5-body">
        <div className="codeutsava__section5-title">Sponsers</div>
        <div className="codeutsava__section5-content">
          On behalf of team TCP, we would like to publicly thank the generous
          sponsors without whom this event could not be held so smoothly.
        </div>
        <div className="codeutsava__section5-sponsers">
          <div className="codeutsava__section5-sponser-title">
            Platinum Sponsors
          </div>
          <div className="codeutsava__section5-sponser-list platinum">
            {sponsers.platinum.map((sponser, index) => (
              <img src={sponser.img} />
            ))}
          </div>
          <div className="codeutsava__section5-sponser-title">
            Gold Sponsors
          </div>
          <div className="codeutsava__section5-sponser-list gold">
            {sponsers.gold.map((sponser, index) => (
              <img src={sponser.img} />
            ))}
          </div>
          <div className="codeutsava__section5-sponser-title">
            Silver Sponsors
          </div>
          <div className="codeutsava__section5-sponser-list silver">
            {sponsers.silver.map((sponser, index) => (
              <img src={sponser.img} />
            ))}
          </div>
          <div className="codeutsava__section5-sponser-title">
            Bronze Sponsors
          </div>
          <div className="codeutsava__section5-sponser-list bronze">
            {sponsers.bronze.map((sponser, index) => (
              <img src={sponser.img} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
