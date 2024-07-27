"use client";

import { useState } from "react";
import axios from "axios";
import { Button } from "@nextui-org/react";

interface Odds {
  banker: number;
  player: number;
  tie: number;
}

const BaccaratCalculator = () => {
  const [odds, setOdds] = useState<Odds | null>(null);
  const [cardList, setCardList] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);

  const handleAddCard = (number: number) => {
    setCardList([...cardList, number]);
  };

  const handleReset = () => {
    setCardList([]);
    setOdds(null);
  };

  const calculateOdds = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://baccarat-odds-system-j2l3.onrender.com/calculate_odds",
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
    <div className="min-h-screen">
      <div className="calculator--container max-w-md mx-auto">
        <h1>Baccarat Odds Calculator</h1>
        <div className="list">
          {cardList.map((item, index) => (
            <span key={index}>{item} </span>
          ))}
        </div>
        <div className="grid grid-cols-5 gap-2 my-4">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
            <Button
              key={number}
              onClick={() => handleAddCard(number)}
              size="sm"
            >
              {number}
            </Button>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <Button onClick={handleReset} size="md">
            Reset
          </Button>
          <Button onClick={calculateOdds} size="md">
            {loading ? "Calculating..." : "Calculate Odds"}
          </Button>
        </div>

        {odds && (
          <div>
            <p>Banker: {(odds.banker * 100).toFixed(2)}%</p>
            <p>Player: {(odds.player * 100).toFixed(2)}%</p>
            <p>Tie: {(odds.tie * 100).toFixed(2)}%</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BaccaratCalculator;
