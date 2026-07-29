'use client'

import { ReactNode } from 'react'
import ThemeProvider from '@/lib/providers/theme.provider'
import { NavigationDrawer } from '@/components/layout/NavigationDrawer'
import { usePathname } from 'next/navigation'
import Header from '@/components/layout/header/Header'
import Footer from '@/components/layout/Footer'

const showLink = (path: string) =>
  !['/login', '/portal', '/super'].some((str) => path.includes(str))

export function RootLayoutWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  return (
    <ThemeProvider>
      <NavigationDrawer />
      {showLink(pathname) && <Header />}
      <main className="min-h-screen">{children}</main>
      {showLink(pathname) && <Footer />}
    </ThemeProvider>
  )
}
