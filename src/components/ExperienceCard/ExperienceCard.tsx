'use client'

import './ExperienceCard.css'
import { Badge } from '../UI/Badge/Badge'
import { CheckIcon } from '@/assets/icons/CheckIcon'

interface ExperienceCardProps {
	title: string
	company: string
	period: string
	achievements: string[]
	technologies: string[]
}

export function ExperienceCard({
	title,
	company,
	period,
	achievements,
	technologies,
}: ExperienceCardProps) {
	return (
		<article className="experience-card">
			<header className="experience-card__header">
				<div>
					<h4 className="experience-card__title">{title}</h4>
					<span className="experience-card__company">{company}</span>
				</div>

				<time className="experience-card__period">{period}</time>
			</header>

			<section className="experience-card__section">
				<h5 className="experience-card__subtitle">Logros clave</h5>

				<ul className="experience-card__list">
					{achievements.map((achievement, index) => (
						<li key={index} className="experience-card__item">
							<CheckIcon />
							<span>{achievement}</span>
						</li>
					))}
				</ul>
			</section>

			<section className="experience-card__section">
				<h5 className="experience-card__subtitle">Stack tecnológico</h5>

				<div className="experience-card__tags">
					{technologies.map((tech, index) => (
						<Badge key={index} variant="outline">
							{tech}
						</Badge>
					))}
				</div>
			</section>
		</article>
	)
}
