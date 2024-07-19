"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = () => {
        // ダミーの認証ロジック
        if (username === 'user' && password === 'password') {
            localStorage.setItem('auth', 'true');
            router.push('/dashboard');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#333] text-gray-700">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
                <div className="flex justify-center items-center">
                    <Image src="/logo.png"
                           alt="IWA COUNTING TRACE"
                           width={300}
                           height={50}
                    />
                </div>
                <h1 className="text-2xl font-bold mb-4">Login</h1>
                <input
                    type="text"
                    placeholder="user"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-2 mb-4 border rounded"
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 mb-4 border rounded"
                />
                <button onClick={handleLogin} className="w-full bg-blue-500 text-white p-2 rounded">
                    Login
                </button>
            </div>
            <p className="mt-4 text-white">ID:user<br />password:password</p>
        </div>
    );
};

export default Login;