import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Therapist Haven',
  description: 'Your sanctuary for mental wellness',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-purple-50 via-rose-50 to-amber-50`}>
        {children}
      </body>
    </html>
  );
}