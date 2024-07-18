"use client";

import React, {useState} from 'react';
import BaccaratTable from './GameTable/BaccaratTable';
import BlackjackTable from './GameTable/BlackjackTable';

export default function GameTable() {
    const [currentTab, setCurrentTab] = useState('Baccarat');

    return (
        <div className="min-h-screen">
            <div className="scrollable">
                <div className="flex gap-x-2">
                    <button
                        className={`px-4 py-2 text-sm font-medium text-gray-700 rounded-t-lg ${currentTab === 'Baccarat' ? 'bg-[#BECAD6]' : 'bg-gray-200'}`}
                        onClick={() => setCurrentTab('Baccarat')}
                    >
                        Baccarat
                    </button>
                    <button
                        className={`px-4 py-2 text-sm font-medium text-gray-700 rounded-t-lg ${currentTab === 'Blackjack' ? 'bg-[#BECAD6]' : 'bg-gray-200'}`}
                        onClick={() => setCurrentTab('Blackjack')}
                    >
                        Blackjack
                    </button>
                </div>
                <div className="bg-[#BECAD6] p-4">
                    {currentTab === 'Baccarat' ? <BaccaratTable/> : <BlackjackTable/>}
                </div>
            </div>
        </div>
    );
}