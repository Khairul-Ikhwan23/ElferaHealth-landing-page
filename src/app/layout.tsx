import type { Metadata } from 'next'
import { Montserrat, Roboto } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.elferahealth.com'),
  title: 'Elfera Health',
  description: 'ElferaHealth provides trusted caregiving and health support services in Brunei - from personal care to medical facilitation, with compassion at the heart of everything we do.',
  keywords: 'ElferaHealth, caregiving, nursing, medical tourism, healthcare, Brunei, special needs, IMPIAN Project, caregiving services',
  openGraph: {
    title: 'Elfera Health',
    description: 'Providing trusted caregiving and health support services in Brunei - from personal care to medical facilitation.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.elferahealth.com/',
    images: ['/favicon.ico'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.elferahealth.com/',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${roboto.variable}`}>
      <body className={`${roboto.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}

