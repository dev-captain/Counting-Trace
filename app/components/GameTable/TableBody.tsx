import React, { useState, useEffect } from 'react';
import GameResultChart from './GameResultChart';

interface TableBodyProps {
    rows: { player: number; banker: number; tie: number }[];
}

const TableBody: React.FC<TableBodyProps> = ({ rows }) => {
    const generateRandomValues = () => {
        const deck = Math.floor(Math.random() * 8); // 0から8までのランダムな値
        const minDeal = deck * 52;
        const maxDeal = (deck + 1) * 52;
        const deal = Math.floor(Math.random() * (maxDeal - minDeal)) + minDeal; // dealのランダムな値
        const rest = 416 - deal; // restの値
        return { deck, deal, rest };
    };

    const [randomValues, setRandomValues] = useState<{ deck: number; deal: number; rest: number }[]>([]);

    useEffect(() => {
        if (rows.length > 0) {
            setRandomValues(rows.map(() => generateRandomValues()));
        }
    }, [rows]);

    return (
        <tbody className="text-gray-600 text-sm font-light">
        {rows.map((row, index) => {
            const { deck, deal, rest } = randomValues[index] || { deck: 0, deal: 0, rest: 0 };
            return (
                <tr key={index} className="">
                    <td className="px-3 text-left whitespace-nowrap bg-white">
                        <div className="flex items-center">
                            <span className="font-medium text-xl">Micro Gaming</span>
                        </div>
                    </td>
                    <td className="px-3 text-left bg-white">
                        <div className="w-full flex items-center justify-center">
                            <span className="bg-gray-100 px-2 py-1 rounded text-xl inline-block w-full text-center">000{index + 1}</span>
                        </div>
                    </td>
                    <td className="px-3 text-left bg-white">
                        <div className={`flex items-center ${row.player >= 50 ? 'text-red-500' : ''}`}>
                            <span className="bg-gray-100 px-2 py-1 rounded text-xl inline-block w-full text-right">{row.player}.00 %</span>
                        </div>
                    </td>
                    <td className="px-3 text-left bg-white">
                        <div className={`flex items-center ${row.banker >= 50 ? 'text-red-500' : ''}`}>
                            <span className="bg-gray-100 px-2 py-1 rounded text-xl inline-block w-full text-right">{row.banker}.00 %</span>
                        </div>
                    </td>
                    <td className="px-3 text-left bg-white">
                        <div className="flex items-center">
                            <span className="bg-gray-100 px-2 py-1 rounded text-xl inline-block w-full text-right">{row.tie} %</span>
                        </div>
                    </td>
                    <td className="px-3 text-left bg-white">
                        <div className="flex items-center">
                            <span className="bg-gray-100 px-2 py-1 rounded text-xl inline-block w-full text-center">{deck}</span>
                        </div>
                    </td>
                    <td className="px-3 text-left bg-white">
                        <div className="flex items-center">
                            <span className="bg-gray-100 px-2 py-1 rounded text-xl inline-block w-full text-center">{deal}</span>
                        </div>
                    </td>
                    <td className="px-3 text-left bg-white">
                        <div className="flex items-center">
                            <span className="bg-gray-100 px-2 py-1 rounded text-xl inline-block w-full text-center">{rest}</span>
                        </div>
                    </td>
                    <td className="px-3 text-left bg-white">
                        <button className="bg-blue-500 text-white px-4 py-1 rounded">link</button>
                    </td>
                    <td className="px-3 text-left">
                        <GameResultChart />
                    </td>
                </tr>
            );
        })}
        </tbody>
    );
};

export default TableBody;