import Footer from '../app/components/Footer';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Josef Dunlap',
  description: "josef dunlap's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='bg-buffalo'>
        {children}
        <Footer />
      </body>
    </html>
  );
}
