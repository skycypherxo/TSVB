import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { ThemeProvider } from '@/contexts/ThemeContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TSVB Trust - Preserving Culture, Nurturing Heritage',
  description: 'NIDAMBOORU BEEDU TRIPURASUNDARI VIJAYA BALLAL TRUST (R) - Dedicated to preserving cultural heritage and serving the community',
  keywords: 'TSVB Trust, Ballal Trust, Cultural Heritage, Udupi, Ambalapady, Community Service',
  authors: [{ name: 'TSVB Trust' }],
  creator: 'TSVB Trust',
  publisher: 'TSVB Trust',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'TSVB Trust - Preserving Culture, Nurturing Heritage',
    description: 'NIDAMBOORU BEEDU TRIPURASUNDARI VIJAYA BALLAL TRUST (R) - Dedicated to preserving cultural heritage and serving the community',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'kn_IN',
    siteName: 'TSVB Trust',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TSVB Trust - Preserving Culture, Nurturing Heritage',
    description: 'NIDAMBOORU BEEDU TRIPURASUNDARI VIJAYA BALLAL TRUST (R) - Dedicated to preserving cultural heritage and serving the community',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body className={`${inter.className} overflow-x-hidden`}>
        <ThemeProvider>
          <LanguageProvider>
            <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-golden-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-x-hidden">
              <Header />
              <main className="pt-4 relative">
                {children}
              </main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}