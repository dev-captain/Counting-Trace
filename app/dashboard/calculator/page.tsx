'use client';

import { useState } from 'react';
import axios from 'axios';

interface Odds {
  banker: number;
  player: number;
  tie: number;
}

const BaccaratCalculator = () => {
  const [odds, setOdds] = useState<Odds | null>(null);
  const [cardList, setCardList] = useState<number[]>([1, 4, 5]);
  const [loading, setLoading] = useState(false);

  const calculateOdds = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://5.9.85.28:5000/calculate_odds",
        {
          cardList: cardList,
        }
      );
      console.log(response);
      setOdds(response.data);
    } catch (error) {
      console.error("Error calculating odds:", error);
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>Baccarat Odds Calculator</h1>
      <div className="list">
        {cardList.map((item, index) => (
          <span key={index}>{item} </span>
        ))}
      </div>
      <button onClick={calculateOdds}>{loading ? "Calculating..." : "Calculate Odds"}</button>

      {odds && (
        <div>
          <p>Banker: {(odds.banker * 100).toFixed(2)}%</p>
          <p>Player: {(odds.player * 100).toFixed(2)}%</p>
          <p>Tie: {(odds.tie * 100).toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
}

export default BaccaratCalculator;
