"use client";

import React, { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function AuthWrapper({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const auth = localStorage.getItem('auth');
        if (!auth && pathname !== '/') {
            router.push('/');
        }
    }, [router, pathname]);

    return <>{children}</>;
}