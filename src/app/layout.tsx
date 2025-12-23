import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { getMetaInfo } from '@/lib/data'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})
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
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				{children}
			</body>
		</html>
	)
}
