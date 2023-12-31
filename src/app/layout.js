import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next Js DashBoard',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={`{inter.className} bg-[url("https://img.freepik.com/premium-vector/interface-structure-data-calculation-systems_49459-481.jpg")] h-full w-full`}>{children}</body>
    </html>
  )
}