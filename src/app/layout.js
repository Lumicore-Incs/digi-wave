import { Inter } from 'next/font/google';
import AOSInit from '../components/AOSInit';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Digi Wave',
  description: 'Modern web applications and digital solutions',
};

export default function RootLayout({ children }) {
  // AOS is initialized in a client component (AOSInit)

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.png" type="image/png" />
      </head>
      <body className={inter.className}>
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
