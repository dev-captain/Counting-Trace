"use client";

import Image from 'next/image';
import { AlignJustify } from 'lucide-react';
import { useRouter } from 'next/navigation';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

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
                className="absolute right-0 flex gap-2 h-48 w-full items-center justify-center lg:size-auto">
                <Dropdown>
                    <DropdownTrigger>
                        <Button
                            variant="solid"
                            className="bg-blue-500 text-white"
                        >
                            <AlignJustify />
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions" className="text-gray-950">
                        <DropdownItem key="profile">Profile</DropdownItem>
                        <DropdownItem key="delete" className="text-danger" color="danger" onClick={handleLogout}>
                            LOGOUT
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </header>
    );
};

export default Navbar;