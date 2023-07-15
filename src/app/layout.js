import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rocket go',
  description: 'random website ...',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" font-IBM bg-black text-white">
        <Navbar />
        {children}</body>
    </html>

  )
}
