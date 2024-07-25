'use client';

import {useState} from 'react';
import axios from 'axios';
import {Button} from "@nextui-org/react";

interface Odds {
  banker: number;
  player: number;
  tie: number;
}

const BaccaratCalculator = () => {
  const [odds, setOdds] = useState<Odds | null>(null);
  const [cardList, setCardList] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setErrorMessage('');
  };

  const handleAddCard = () => {
    const newCard = parseInt(inputValue, 10);
    if (!isNaN(newCard) && newCard >= 0 && newCard <= 9) {
      setCardList([...cardList, newCard]);
      setInputValue('');
    } else {
      setErrorMessage('Please enter a number between 0 and 9');
    }
  };

  const handleReset = () => {
    setCardList([]);
    setOdds(null);
    setErrorMessage('');
  };

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
    <div className="min-h-screen">
      <div className="calculator--container max-w-md mx-auto">
        <h1>Baccarat Odds Calculator</h1>
        <div className="list">
          {cardList.map((item, index) => (
            <span key={index}>{item} </span>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <input
            type="number"
            value={inputValue}
            min="0"
            max="9"
            onChange={handleInputChange}
            placeholder="Enter card number"
            className="border p-2 rounded-md text-gray-800"
          />
          <Button onClick={handleAddCard} size="md">Add Card</Button>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <Button onClick={handleReset} size="md">Reset</Button>
          <Button onClick={calculateOdds} size="md">{loading ? "Calculating..." : "Calculate Odds"}</Button>

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
}

export default BaccaratCalculator;