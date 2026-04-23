import './globals.css';

export const metadata = {
  title: 'NYU Living History Project',
  description: 'A student-made interactive oral history of New York University',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
