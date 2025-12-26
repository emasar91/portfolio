import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { getMetaInfo } from '@/lib/data'

const inter = Inter({ subsets: ['latin'] })

const metaInfo = getMetaInfo()

export const metadata: Metadata = {
	title: metaInfo.title,
	description: metaInfo.description,
}
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className}`}>{children}</body>
		</html>
	)
}
