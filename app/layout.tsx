import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import AuthWrapper from './AuthWrapper';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'IWA COUNTING TRACE',
    description: '',
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={montserrat.className}>
        <AuthWrapper>{children}</AuthWrapper>
        </body>
        </html>
    );
}