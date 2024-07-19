import '@/styles/globals.css';

import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import React, { PropsWithChildren } from 'react';

import ReduxProvider from '@/app/ReduxProvider';
import ClientOnly from '@/components/ClientOnly';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SideBar from '@/components/SideBar';
import { siteConfig } from '@/configs/siteConfig';
import { NAVBAR_ITEMS } from '@/constants/common';
import { cn } from '@/lib/utils';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['Next.js', 'React', 'Tailwind CSS', 'Server Components', 'Radix UI'],
};

const RootLayout = ({ children }: PropsWithChildren): React.ReactElement => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'custom-scrollbar bg-background flex min-h-screen min-w-full font-sans antialiased',
          fontSans.variable
        )}
      >
        <ClientOnly>
            <ReduxProvider>
              <SideBar items={NAVBAR_ITEMS} />
              <div className="flex w-full flex-col md:pl-[260px]">
                <Header />
                <div className="mt-[70px] min-h-[calc(100vh-410px)] w-full p-[24px] md:p-[54px]">{children}</div>
                <Footer />
              </div>
            </ReduxProvider>
        </ClientOnly>
      </body>
    </html>
  );
};

export default RootLayout;
