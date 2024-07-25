import React from 'react';

interface Odds {
  banker: number;
  player: number;
  tie: number;
}

const OddsDisplay: React.FC<{ odds: Odds }> = ({ odds }) => {
  return (
    <div>
      <p>Banker: {(odds.banker * 100).toFixed(2)}%</p>
      <p>Player: {(odds.player * 100).toFixed(2)}%</p>
      <p>Tie: {(odds.tie * 100).toFixed(2)}%</p>
    </div>
  );
};

export default OddsDisplay;