"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthWrapper({
                                        children,
                                    }: Readonly<{
    children: React.ReactNode;
}>) {
    const router = useRouter();

    useEffect(() => {
        const auth = localStorage.getItem('auth');
        if (!auth && router.pathname !== '/login') {
            router.push('/login');
        }
    }, [router]);

    return <>{children}</>;
}