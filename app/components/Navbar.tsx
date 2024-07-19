"use client";

import Image from 'next/image';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('auth');
        router.push('/');
    };

    return (
        <header className="z-10 w-full items-center justify-center text-sm lg:flex relative">
            <div className="flex items-center">
                <Image src="/logo.png"
                       alt="IWA COUNTING TRACE"
                       width={200}
                       height={50}
                />
            </div>
            <div
                className="absolute right-0 flex gap-2 h-48 w-full items-center justify-center bg-gradient-to-t from-white via-white lg:size-auto lg:bg-none">
                <button
                    className="pointer-events-none flex place-items-center gap-2 p-2 lg:pointer-events-auto rounded-md bg-[#2380C8] font-bold"
                    onClick={handleLogout}
                >
                    <LogOut />
                </button>
            </div>
        </header>
    );
};

export default Navbar;