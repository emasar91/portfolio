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

// Home.tsx
export default function Home() {
	const projects = getAllProjects()
	const experienceInfo = getExperienceInfo()
	const technicalSkills = getTechnicalSkillsInfo()

	return (
		<main className="home">
			{/* Background grid */}
			<div className="home__background" />

			<PortfolioHeader />

			<div className="home__container">
				<div className="home__grid">
					{/* Profile */}
					<div className="home__profile">
						<EnhancedProfile />
					</div>

					{/* Main content */}
					<div className="home__content">
						{/* Experience */}
						<div className="card">
							<div className="card__content">
								<header className="section-header">
									<BriefCaseIcon />
									<h3>Experience</h3>
								</header>

								<div className="experience-list">
									{experienceInfo.map((experience, index) => (
										<ExperienceCard key={index} {...experience} />
									))}
								</div>
							</div>
						</div>

						<CredentialsSection />

						{/* Skills */}
						<div className="card">
							<div className="card__content">
								<header className="section-header">
									<CodeIcon color="gray" />
									<h3>Technical Skills</h3>
								</header>

								<div className="skills-grid">
									{Object.entries(technicalSkills).map(([key, list]) => (
										<div key={key} className="skills-group">
											<h4>{key}</h4>
											<div className="skills-list">
												{list.map((skill: string, i: number) => (
													<SkillTag key={i}>{skill}</SkillTag>
												))}
											</div>
										</div>
									))}
								</div>
							</div>
						</div>

						{/* Projects */}
						<div className="card">
							<div className="card__content">
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
							</div>
						</div>
					</div>
				</div>

				<footer className="home__footer">
					© {new Date().getFullYear()} Jane Doe. All rights reserved.
				</footer>
			</div>

			<EnhancedScrollIndicator />
		</main>
	)
}
