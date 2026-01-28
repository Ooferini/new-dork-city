import './globals.css';

export const metadata = {
  title: "Jo's Senior Project Process Site",
  description: 'Josef Dunlap Senior Project with Tega Brain Spring 26',
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
