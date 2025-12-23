'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getNavItems, getPersonalInfo } from '@/lib/data'
import './PortfolioHeader.css'

export function PortfolioHeader() {
	const [scrolled, setScrolled] = useState(false)
	const [activeSection, setActiveSection] = useState('')

	const navItems = getNavItems()
	const personalInfo = getPersonalInfo()

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20)

			const sections = navItems
				.filter((item) => item.href.startsWith('#'))
				.map((item) => item.href.substring(1))

			for (const section of sections.reverse()) {
				const element = document.getElementById(section)
				if (element) {
					const rect = element.getBoundingClientRect()
					if (rect.top <= 150) {
						setActiveSection(section)
						break
					}
				}
			}

			if (window.scrollY < 100) {
				setActiveSection('')
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [navItems])

	return (
		<header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
			<div className="header__container">
				{/* Logo */}
				<Link href="/" className="brand group">
					<div className="brand__name">
						{personalInfo.name}
						<span className="brand__underline" />
					</div>
					<span className="brand__title">/ {personalInfo.title}</span>
				</Link>

				{/* Desktop navigation */}
				<nav className="nav nav--desktop">
					{navItems.map((item) => {
						const isActive =
							item.href === '/'
								? activeSection === ''
								: activeSection === item.href.substring(1)

						return (
							<Link
								key={item.label}
								href={item.href}
								className={`nav__link ${isActive ? 'is-active' : ''}`}
								onClick={() => setActiveSection(item.href.substring(1))}
							>
								<span className="nav__text">{item.label}</span>
								<span className="nav__bg" />
								<span
									className={`nav__underline ${isActive ? 'is-active' : ''}`}
								/>
							</Link>
						)
					})}
				</nav>
			</div>
		</header>
	)
}
