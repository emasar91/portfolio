import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { getMetaInfo } from '@/lib/data'

const inter = Inter({ subsets: ['latin'] })

const metaInfo = getMetaInfo()

export const metadata: Metadata = {
	metadataBase: new URL('https://emasar-portfolio.vercel.app'),
	title: metaInfo.title,
	description: metaInfo.description,
	openGraph: {
		title: metaInfo.title,
		description: metaInfo.description,
		url: 'https://emasar-portfolio.vercel.app/',
		siteName: 'Emanuel Sarco Portfolio',
		images: [
			{
				url: '/assets/images/miniature.png',
				width: 1200,
				height: 630,
				alt: 'Emanuel Sarco - Software Developer',
			},
		],
		locale: 'es_AR',
		type: 'website',
	},
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
