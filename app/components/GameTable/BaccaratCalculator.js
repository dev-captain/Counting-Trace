import React, { useState } from "react";
import axios from "axios";

function BaccaratCalculator() {
  const [odds, setOdds] = useState(null);
  const playerHand = [7, 1];
  const bankerHand = [7, 2];
  const calculateOdds = async () => {
    try {
      const response = await axios.post(
        "http://5.9.85.28:5000/calculate_odds",
        {
          player_hand: playerHand,
          banker_hand: bankerHand,
        }
      );
      setOdds(response.data);
    } catch (error) {
      console.error("Error calculating odds:", error);
    }
  };

  return (
    <div>
      <h1>Baccarat Odds Calculator</h1>
      <div>
        <h2>Player Hand Card</h2>
        <div className="list">
          {playerHand.map((item, index) => {
            return <span key={index}>{item}</span>;
          })}
        </div>
      </div>
      <div>
        <h2>Banker Hand Card</h2>
        <div className="list">
          {bankerHand.map((item, index) => {
            return <span key={index}>{item}</span>;
          })}
        </div>
      </div>
      <button onClick={calculateOdds}>Calculate Odds</button>
      {odds && (
        <div>
          <p>Player Win Probability: {odds.player}</p>
          <p>Banker Win Probability: {odds.banker}</p>
          <p>Tie Probability: {odds.tie}</p>
        </div>
      )}
    </div>
  );
}

export default BaccaratCalculator;
