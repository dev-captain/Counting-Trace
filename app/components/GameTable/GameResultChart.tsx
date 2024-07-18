import React, { useState, useEffect } from 'react';

interface GameResultChartProps {
    // 必要に応じてpropsを追加
}

type Symbol = '●' | '◆' | '▲';

const GameResultChart: React.FC<GameResultChartProps> = () => {
    const symbols: Symbol[] = ['●', '◆', '▲'];
    const [board, setBoard] = useState<Symbol[][]>(Array(6).fill(null).map(() => Array(6).fill(null)));

    useEffect(() => {
        const generateBoard = (): Symbol[][] => {
            const newBoard: Symbol[][] = Array(6).fill(null).map(() => Array(6).fill(null));
            let currentCol = 0;
            let currentRow = 0;
            let previousSymbol: Symbol | null = null;
            let consecutiveCount = 0;   

            while (currentCol < 6) {
                const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];

                if (randomSymbol !== previousSymbol || consecutiveCount === 6) {
                    currentRow = 0;
                    if (randomSymbol !== previousSymbol) {
                        currentCol++;
                        if (currentCol >= 6) break;
                    }
                    consecutiveCount = 0;
                }

                newBoard[currentRow][currentCol] = randomSymbol;
                currentRow++;
                consecutiveCount++;
                previousSymbol = randomSymbol;
            }

            return newBoard;
        };

        setBoard(generateBoard());
    }, []);

    return (
        <div className="flex items-center">
            <div className="grid grid-cols-6 gap-1">
                {board.map((row, rowIndex) =>
                    row.map((symbol, colIndex) => (
                        <div
                            key={`${rowIndex}-${colIndex}`}
                            className="w-4 h-4 border border-black flex items-center justify-center"
                        >
                            {symbol}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default GameResultChart;