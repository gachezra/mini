import './globals.css'
import { Poppins } from 'next/font/google'
import { ThemeProvider } from 'components/theme-provider'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  // This ensures the viewport stays fixed
  position: 'fixed',
  // Disable iOS bounce effect
  touchAction: 'none'
}

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} overflow-auto`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {children}
        </ThemeProvider>
      </body>
    </html>
  )
}