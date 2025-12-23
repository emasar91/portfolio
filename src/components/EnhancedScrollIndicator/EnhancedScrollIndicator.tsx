'use client'

import { useState, useEffect } from 'react'
import { ArrowUp } from '@/assets/icons/ArrowUpIcon'
import './EnhancedScrollIndicator.css'

export function EnhancedScrollIndicator() {
	const [scrollProgress, setScrollProgress] = useState(0)
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const updateScrollProgress = () => {
			const scrollTop = window.scrollY
			const docHeight =
				document.documentElement.scrollHeight - window.innerHeight

			const scrollPercent = scrollTop / docHeight
			setScrollProgress(scrollPercent)
			setIsVisible(scrollTop > 100)
		}

		window.addEventListener('scroll', updateScrollProgress)
		updateScrollProgress()

		return () => window.removeEventListener('scroll', updateScrollProgress)
	}, [])

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	const progressPercentage = Math.min(Math.round(scrollProgress * 100), 100)

	return (
		<div className={`scroll-indicator ${isVisible ? 'visible' : 'hidden'}`}>
			<div className="scroll-indicator-inner">
				<div
					className="progress-button"
					onClick={scrollToTop}
					role="button"
					aria-label="Scroll to top"
				>
					<svg className="progress-svg" viewBox="0 0 48 48">
						{/* Background circle */}
						<circle
							cx="24"
							cy="24"
							r="20"
							fill="none"
							stroke="#27272a"
							strokeWidth="2"
						/>

						{/* Progress circle */}
						<circle
							cx="24"
							cy="24"
							r="20"
							fill="none"
							stroke="url(#gradient)"
							strokeWidth="2"
							strokeDasharray={2 * Math.PI * 20}
							strokeDashoffset={2 * Math.PI * 20 * (1 - scrollProgress)}
							strokeLinecap="round"
						/>

						<defs>
							<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
								<stop offset="0%" stopColor="#06b6d4" />
								<stop offset="100%" stopColor="#3b82f6" />
							</linearGradient>
						</defs>
					</svg>

					<div className="icon-wrapper">
						<ArrowUp color="#fff" />
					</div>
				</div>

				<div className="progress-label">{progressPercentage}%</div>
			</div>
		</div>
	)
}
