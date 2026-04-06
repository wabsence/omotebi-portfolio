import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Omotebi Egbowon - DevOps Engineer',
  description: 'DevOps Engineer with 6+ years building secure, reliable, and scalable platforms across fintech, e-commerce, and public sector.',
  keywords: 'DevOps Engineer, DevSecOps, AWS, Kubernetes, Terraform, CI/CD, Cloud Security, ISO 27001',
  authors: [{ name: 'Omotebi Egbowon' }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased bg-slate-950`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="relative min-h-screen bg-slate-950 overflow-x-hidden">
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-600 rounded-full filter blur-3xl opacity-5 animate-float" />
              <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl opacity-5 animate-float" style={{animationDelay:'3s'}} />
            </div>
            <main className="relative z-10">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
