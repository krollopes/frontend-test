'use client';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { Providers } from './providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer year={currentYear} />
        </Providers>
      </body>
    </html>
  );
}
