// src/components/Layout.tsx
import * as React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';


interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (

            <div className="w-full min-h-screen bg-gray-950">
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
    );
};