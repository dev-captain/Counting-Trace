import { useEffect, useState } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

export default function BlackjackTable() {
    function generateRandomValues() {
        let player = Math.floor(Math.random() * 100);
        let banker = Math.floor(Math.random() * (100 - player));
        let tie = 100 - player - banker;
        return { player, banker, tie };
    }

    const [rows, setRows] = useState<{ player: number; banker: number; tie: number }[]>([]);

    useEffect(() => {
        const generatedRows = Array.from({ length: 10 }).map(() => generateRandomValues());
        setRows(generatedRows);
    }, []);

    const headers = [
        { key: 'brand', label: 'Brand' },
        { key: 'roomNo', label: 'Room No.' },
        { key: 'player', label: 'Player' },
        { key: 'banker', label: 'Banker' },
        { key: 'tie', label: 'Tie' },
        { key: 'deck', label: 'Deck' },
        { key: 'deal', label: 'Deal' },
        { key: 'rest', label: 'Rest' },
        { key: 'jump', label: 'Jump' },
        { key: 'chart', label: 'Chart' },
    ];

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-y-4">
                <TableHeader headers={headers} />
                <TableBody rows={rows} />
            </table>
        </div>
    )
}