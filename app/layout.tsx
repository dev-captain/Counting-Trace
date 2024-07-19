import type {Metadata} from 'next';
import {Providers} from "./providers";
import './globals.css';
import {Montserrat} from 'next/font/google';
import AuthWrapper from './AuthWrapper';

const montserrat = Montserrat({subsets: ['latin']});

export const metadata: Metadata = {
    title: 'IWA COUNTING TRACE',
    description: '',
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body className={montserrat.className}>
        <Providers>
            <AuthWrapper>{children}</AuthWrapper>
        </Providers>
        </body>
        </html>
    );
}