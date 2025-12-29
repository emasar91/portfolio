'use client'
import type React from 'react'
import './Home.css'

import { PortfolioHeader } from '@/components/PortfolioHeader/PortfolioHeader'
import { EnhancedProfile } from '@/components/EnhancedProfile/EnhancedProfile'
import { EnhancedScrollIndicator } from '@/components/EnhancedScrollIndicator/EnhancedScrollIndicator'
import { CredentialsSection } from '@/components/CredentialsSection/CredentialsSection'
import Footer from '@/components/Footer/Footer'
import ProjecsSection from '@/components/ProjectsSection/ProjecsSection'
import TecnicalSkills from '@/components/TecnicalSkills/TecnicalSkills'
import ExperienceSection from '@/components/ExperienceSection/ExperienceSection'

export const SkillTag = ({ children }: { children: React.ReactNode }) => {
	return <span className="skill-tag">{children}</span>
}

export default function Home() {
	return (
		<main className="home">
			{/* Background grid */}
			<div className="home__background" />

			<PortfolioHeader />

			<div className="home__container">
				<div className="home__grid">
					{/* Profile */}
					<EnhancedProfile />

					{/* Main content */}
					<main className="home__content">
						{/* Experience */}
						<ExperienceSection />

						{/* Credentials */}
						<CredentialsSection />

						{/* Technical skills */}
						<TecnicalSkills />

						{/* Projects */}
						<ProjecsSection />
					</main>
				</div>

				<Footer />
			</div>
			{/* Enhanced scroll indicator */}
			<EnhancedScrollIndicator />
		</main>
	)
}
