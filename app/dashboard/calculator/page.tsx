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

  const cardNames = ['10s & Faces', 'Aces', '2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s'];
  const maxCounts = [128, 32, 32, 32, 32, 32, 32, 32, 32, 32];

  const handleAddCard = (index: number) => {
    const currentCount = cardList.filter(item => item === index).length;
    if (currentCount < maxCounts[index]) {
      setCardList([...cardList, index]);
    }
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
    <div className="min-h-screen flex justify-center items-center">
      <div className="calculator--container max-w-md mx-auto">
        <h1 className="text-center text-3xl mb-4">Baccarat Odds Calculator</h1>
        <div className="list grid grid-cols-2 gap-4">
          {cardNames.map((name, index) => {
            const count = cardList.filter(item => item === index).length;
            const maxCount = maxCounts[index];
            return (
              <div key={index} className="flex items-center justify-between">
                <span className="font-bold">{name}:</span>
                <span>{count}/{maxCount}</span>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-5 gap-2 my-4">
          {cardNames.map((name, index) => {
            const currentCount = cardList.filter(item => item === index).length;
            const isDisabled = currentCount >= maxCounts[index];
            return (
              <Button
                key={index}
                onClick={() => handleAddCard(index)}
                size="sm"
                disabled={isDisabled}
              >
                {index === 0 ? '10+' : index === 1 ? 'A' : index}
              </Button>
            );
          })}
        </div>
        <div className="flex flex-col gap-4 mb-4">
          <Button onClick={handleReset} size="md">
            Reset
          </Button>
          <Button onClick={calculateOdds} size="md">
            {loading ? "Calculating..." : "Calculate Odds"}
          </Button>
        </div>

        {odds && (
          <div className="flex flex-col gap-4 justify-center items-center">
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
