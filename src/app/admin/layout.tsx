import PrimaryAppBar from '@/components/AppBar'
import { Box } from '@mui/material'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Admin dashboard',
}

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="flex flex-col items-center">
      <PrimaryAppBar />
      <Box className="mt-20 container px-4">{children}</Box>
    </main>
  )
}
