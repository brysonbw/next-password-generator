import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Password Generator | Home',
  description: 'Generate password',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col items-center justify-center min-h-screen">
          {/** Navbar */}
          <Navbar />
          {/** Main Content */}
          <div className="main-container">{children}</div>
          {/** Footer */}
          <Footer />
        </main>
        <Toaster />
      </body>
    </html>
  );
}
