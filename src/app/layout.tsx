import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: ' Superposition X Canex',
  description: '슈퍼포지션과 캐넥스의 만남',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body>{children}</body>
    </html>
  );
}
