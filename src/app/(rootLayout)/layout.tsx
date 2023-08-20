
import { MainHeader, TopHeader } from '@/components/global/Header'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { layoutRequester } from '@/services'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nong Co Hai Tra Tan',
  description: 'Generated by create next app',
}



export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

    const response = await fetch('http://localhost:3000/api/menu', {next: {revalidate:5}});
    const data = await response.json();
  
  return (
    <html lang="en">
      <body  suppressHydrationWarning={true} className={inter.className}>
        <header>
          <TopHeader />
          <MainHeader content={data} />
        </header>
        {children}
        </body>
    </html>
  )
}
