'use client';

import './globals.css'
import { Inter } from 'next/font/google'
import Provider from '@/components/Provider';
import {RecoilRoot} from 'recoil'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Instagram App',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <RecoilRoot>
          <main>
            {children}
          </main>
          </RecoilRoot>
        </Provider>
      </body>
    </html>
  )
}
