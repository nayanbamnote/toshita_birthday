import './globals.css'
import { Inter } from 'next/font/google'
import { Loader } from '@/components/ui/loader'
import { Suspense } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Toshita's Starry Night",
  description: 'A magical journey through Toshita\'s world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black min-h-screen dark`}>
        <Suspense fallback={<Loader />}>
          {children}
        </Suspense>
      </body>
    </html>
  )
}

