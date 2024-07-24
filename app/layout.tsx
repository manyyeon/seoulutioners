import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';

const pretendard = localFont({
  src: [
    {
      path: '../public/assets/fonts/Pretendard-Bold.ttf',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/Pretendard-Medium.ttf',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/Pretendard-Regular.ttf',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/Pretendard-SemiBold.ttf',
      style: 'normal',
    },
    // {
    //   path: '../public/assets/fonts/SSYoungestDaughterRegular.ttf',
    //   style: 'normal',
    // },
  ],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={pretendard.className}>{children}</body>
    </html>
  );
}
