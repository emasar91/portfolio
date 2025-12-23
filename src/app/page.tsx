import type React from 'react'
import './Home.css'

import { Button } from '@/components/UI/Button/Button'
import { Card, CardContent } from '@/components/UI/Card/Card'

import {
	getAllProjects,
	getExperienceInfo,
	getTechnicalSkillsInfo,
} from '@/lib/data'
import { PortfolioHeader } from '@/components/PortfolioHeader/PortfolioHeader'
import { EnhancedProfile } from '@/components/EnhancedProfile/EnhancedProfile'
import { BriefCaseIcon } from '@/assets/icons/BriefCaseIcon'
import { WorldIcon } from '@/assets/icons/WorldIcon'
import { EnhancedScrollIndicator } from '@/components/EnhancedScrollIndicator/EnhancedScrollIndicator'
import { ExperienceCard } from '@/components/ExperienceCard/ExperienceCard'
import { CredentialsSection } from '@/components/CredentialsSection/CredentialsSection'
import { CodeIcon } from '@/assets/icons/CodeIcon'
import { ProjectCard } from '@/components/ProjectCard/ProjectCard'

/* ---------------------------------- */

export const SkillTag = ({ children }: { children: React.ReactNode }) => {
	return <span className="skill-tag">{children}</span>
}

/* ---------------------------------- */

export default function Home() {
	const projects = getAllProjects()
	const experienceInfo = getExperienceInfo()
	const technicalSkills = getTechnicalSkillsInfo()

	return (
		<main className="home">
			{/* Background grid */}
			<div className="home__background" />

			{/* Header */}
			<PortfolioHeader />

			<div className="home__container">
				<div className="home__grid">
					{/* Profile */}
					<aside className="home__profile">
						<EnhancedProfile />
					</aside>

					{/* Main content */}
					<section className="home__content">
						{/* ================= Experience ================= */}
						<Card className="section-card">
							<CardContent>
								<header className="section-header">
									<BriefCaseIcon color="gray" />
									<h3>Experience</h3>
								</header>

								<div className="experience-list">
									{experienceInfo.map((experience, index) => (
										<ExperienceCard key={index} {...experience} />
									))}
								</div>
							</CardContent>
						</Card>

						{/* ================= Credentials ================= */}
						<CredentialsSection />

						{/* ================= Skills ================= */}
						<Card className="section-card">
							<CardContent>
								<header className="section-header">
									<CodeIcon color="gray" />
									<h3>Technical Skills</h3>
								</header>

								<div className="skills-grid">
									<div className="skills-group">
										<h4>Design</h4>
										<div className="skills-list">
											{technicalSkills.design.map((s, i) => (
												<SkillTag key={i}>{s}</SkillTag>
											))}
										</div>
									</div>

									<div className="skills-group">
										<h4>Development</h4>
										<div className="skills-list">
											{technicalSkills.development.map((s, i) => (
												<SkillTag key={i}>{s}</SkillTag>
											))}
										</div>
									</div>

									<div className="skills-group">
										<h4>UX Methods</h4>
										<div className="skills-list">
											{technicalSkills.uxMethods.map((s, i) => (
												<SkillTag key={i}>{s}</SkillTag>
											))}
										</div>
									</div>

									<div className="skills-group">
										<h4>Soft Skills</h4>
										<div className="skills-list">
											{technicalSkills.softSkills.map((s, i) => (
												<SkillTag key={i}>{s}</SkillTag>
											))}
										</div>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* ================= Projects ================= */}
						<Card className="section-card">
							<CardContent>
								<header className="section-header section-header--space">
									<div className="section-header__left">
										<WorldIcon color="gray" />
										<h3>Recent Projects</h3>
									</div>

									<Button variant="ghost" size="sm">
										View All
									</Button>
								</header>

								<div className="projects-grid">
									{projects.map((project, index) => (
										<ProjectCard key={index} {...project} />
									))}
								</div>
							</CardContent>
						</Card>
					</section>
				</div>

				<footer className="home__footer">
					© {new Date().getFullYear()} Jane Doe. All rights reserved.
				</footer>
			</div>

			<EnhancedScrollIndicator />
		</main>
	)
}
